// shared.js

const CAT_LABELS = {
  all: "All",
  unit1: "Unit 1: Structure & Bonding",
  unit2: "Unit 2: Energetics & Org. Intro",
  unit3: "Unit 3: Practical Skills I",
  unit4: "Unit 4: Rates, Equilibria & Org.",
  unit5: "Unit 5: Transition Metals & N-Org.",
  unit6: "Unit 6: Practical Skills II"
};

// ============================================
// STORAGE & DATA MANAGEMENT
// ============================================

class StorageManager {
  constructor() {
    this.CARDS_KEY = 'chemistry_cards';
    this.GLOBAL_STATS_KEY = 'chemistry_stats_global';
    this.initData();
  }

  initData() {
    if (!localStorage.getItem(this.CARDS_KEY)) {
      this.saveCards(this.enhanceCards(ORIGINAL_CARDS));
    }
    if (!localStorage.getItem(this.GLOBAL_STATS_KEY)) {
      this.saveStats('global', {
        totalReviewed: 0,
        totalCorrect: 0,
        accuracy: 0,
        studyStreak: 0,
        lastStudy: null
      });
    }
  }

  enhanceCards(cards) {
    return cards.map((card, i) => ({
      ...card,
      id: `card-${i}`,
      mastery: 0,
      attempts: 0,
      correct: 0,
      lastReview: null,
      nextReview: null
    }));
  }

  saveCards(cards) {
    localStorage.setItem(this.CARDS_KEY, JSON.stringify(cards));
  }

  getCards() {
    const stored = localStorage.getItem(this.CARDS_KEY);
    return stored ? JSON.parse(stored) : this.enhanceCards(ORIGINAL_CARDS);
  }

  getStatsKey(unitKey) {
    return unitKey === 'global' ? this.GLOBAL_STATS_KEY : `chemistry_stats_${unitKey}`;
  }

  saveStats(unitKey, stats) {
    localStorage.setItem(this.getStatsKey(unitKey), JSON.stringify(stats));
  }

  getStats(unitKey) {
    const stored = localStorage.getItem(this.getStatsKey(unitKey));
    return stored ? JSON.parse(stored) : {
      totalReviewed: 0,
      totalCorrect: 0,
      accuracy: 0,
      studyStreak: 0,
      lastStudy: null,
      cardMetadata: {} // legacy support or per-unit specific meta
    };
  }

  updateCardMetadata(cardId, updates) {
    const cards = this.getCards();
    const card = cards.find(c => c.id === cardId);
    if (card) {
      Object.assign(card, updates);
      this.saveCards(cards);
    }
  }

  updateStats(unitKey, updates) {
    const stats = this.getStats(unitKey);
    Object.assign(stats, updates);
    this.saveStats(unitKey, stats);
  }

  exportData() {
    const cards = this.getCards();
    const allStats = { global: this.getStats('global') };
    ['unit1', 'unit2', 'unit3', 'unit4', 'unit5', 'unit6'].forEach(unit => {
      allStats[unit] = this.getStats(unit);
    });
    return JSON.stringify({ cards, stats: allStats, exportedAt: new Date().toISOString() }, null, 2);
  }

  importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data.cards && Array.isArray(data.cards)) {
        this.saveCards(data.cards);
      }
      if (data.stats && typeof data.stats === 'object') {
        Object.keys(data.stats).forEach(unitKey => {
          this.saveStats(unitKey, data.stats[unitKey]);
        });
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  resetData() {
    localStorage.removeItem(this.CARDS_KEY);
    localStorage.removeItem(this.GLOBAL_STATS_KEY);
    ['unit1', 'unit2', 'unit3', 'unit4', 'unit5', 'unit6'].forEach(unit => {
      localStorage.removeItem(this.getStatsKey(unit));
    });
    this.initData();
  }
}

const storage = new StorageManager();

// ============================================
// SPACED REPETITION & MASTERY
// ============================================

class SpacedRepetition {
  static getIntervals() {
    return [1, 3, 7, 14, 30]; // days
  }

  static updateMastery(card, wasCorrect) {
    const intervals = this.getIntervals();
    let newMastery = card.mastery;
    
    if (wasCorrect) {
      newMastery = Math.min(3, newMastery + 1);
    } else {
      newMastery = Math.max(0, newMastery - 1);
    }

    let nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + intervals[newMastery]);

    return {
      mastery: newMastery,
      attempts: card.attempts + 1,
      correct: card.correct + (wasCorrect ? 1 : 0),
      lastReview: Date.now(),
      nextReview: nextReview.getTime()
    };
  }

  static formatNextReview(nextReviewTime) {
    if (!nextReviewTime) return 'New';
    const now = new Date();
    const then = new Date(nextReviewTime);
    const days = Math.ceil((then - now) / (1000 * 60 * 60 * 24));
    if (days <= 0) return 'Review now';
    if (days === 1) return 'Tomorrow';
    return `In ${days}d`;
  }

  static getMasteryLabel(mastery) {
    const labels = ['New', 'Learning', 'Familiar', 'Mastered'];
    return labels[mastery] || 'New';
  }
}

// ============================================
// SHARED UTILITIES
// ============================================

function getDeck(category, searchQuery = '') {
  const cards = storage.getCards();
  let filtered = category === 'all' ? [...cards] : cards.filter(c => c.cat === category);
  
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(c => 
      c.q.toLowerCase().includes(query) || 
      c.a.toLowerCase().includes(query)
    );
  }
  
  return filtered;
}

function tagClass(cat) {
  return "card-cat-tag tag-" + cat;
}

function syncHeight(sceneId, innerId) {
  const scene = document.getElementById(sceneId);
  if (!scene) return;
  const inner = document.getElementById(innerId);
  const front = scene.querySelector('.card-face.front');
  const back = scene.querySelector('.card-face.back');
  
  const frontHeight = front.offsetHeight;
  const backHeight = back ? back.offsetHeight : 0;
  const maxHeight = Math.max(frontHeight, backHeight);
  
  scene.style.height = maxHeight + 'px';
  inner.style.height = maxHeight + 'px';
  if (back) back.style.height = maxHeight + 'px';
}

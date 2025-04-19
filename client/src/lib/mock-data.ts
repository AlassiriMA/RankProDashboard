export const keywordTrendData = {
  labels: ['May 1', 'May 8', 'May 15', 'May 22', 'May 29', 'Jun 5', 'Jun 12'],
  datasets: [{
    label: 'Average Position',
    data: [12, 10, 8, 9, 6, 5, 3],
    borderColor: '#3b82f6',
    tension: 0.4,
    fill: true
  }]
}

export const keywordsData = [
  {
    id: 1,
    keyword: "seo tools comparison",
    position: 3,
    previous: 5,
    change: 2,
    trend: "up",
    volume: 2400,
    difficulty: 65
  },
  {
    id: 2,
    keyword: "best keyword research tool",
    position: 8,
    previous: 6,
    change: 2,
    trend: "down",
    volume: 5800,
    difficulty: 78
  },
  {
    id: 3,
    keyword: "how to improve site seo",
    position: 4,
    previous: 9,
    change: 5,
    trend: "up",
    volume: 3200,
    difficulty: 45
  },
  {
    id: 4,
    keyword: "backlink analysis",
    position: 12,
    previous: 12,
    change: 0,
    trend: "neutral",
    volume: 1900,
    difficulty: 38
  }
]

export const auditAlertsData = [
  {
    id: 1,
    title: "Broken Links (4)",
    description: "Links on blog pages are returning 404 errors",
    severity: "high",
    action: "Fix Now"
  },
  {
    id: 2,
    title: "Missing Meta Descriptions (7)",
    description: "Some pages are missing meta descriptions",
    severity: "medium",
    action: "Review"
  },
  {
    id: 3,
    title: "Slow Loading Pages (3)",
    description: "Pages with load time > 3 seconds",
    severity: "medium",
    action: "Optimize"
  }
]

export const reportsData = [
  {
    id: 1,
    title: "Content Performance",
    description: "Analysis of top performing content and keyword opportunities",
    date: "2 days ago"
  },
  {
    id: 2,
    title: "Competitor Analysis",
    description: "Comparison with top 3 competitors in your industry",
    date: "1 week ago"
  },
  {
    id: 3,
    title: "Technical SEO Audit",
    description: "Complete analysis of technical SEO issues and recommendations",
    date: "2 weeks ago"
  }
]

export const kpiCardData = [
  {
    title: "Site Health",
    value: "87/100",
    detail: "14 issues found",
    change: "+3%",
    trend: "up"
  },
  {
    title: "Top Keywords",
    value: "103",
    detail: "28 in top 10",
    change: "+12%",
    trend: "up"
  },
  {
    title: "Backlinks",
    value: "1,429",
    detail: "89 new this month",
    change: "+7%",
    trend: "up"
  },
  {
    title: "Pages Indexed",
    value: "256",
    detail: "Same as last week",
    change: "0%",
    trend: "neutral"
  }
]

export const userData = {
  name: "MAK",
  website: "mywebsite.com",
  lastScan: "Today, 09:45 AM"
}

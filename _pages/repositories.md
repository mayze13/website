---
layout: page
permalink: /data-science/
title: Data Science
nav: true
nav_order: 3
description: Selected projects at the intersection of AI, NLP, and applied data science.
---

I've been working as a data scientist and AI teacher since 2023. Below are some of my public projects — tools built for learning, research, and applied NLP.

Add or remove repos in `_data/repositories.yml`.

---

{% if site.data.repositories.github_users %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% endif %}

{% if site.data.repositories.github_repos %}

## Projects

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

{% endif %}

<script setup>
import BaseButton from '@/components/common/BaseButton.vue'
import {
  profileData,
  profileStats,
  focusAreas,
  recentActivity,
  savedContent,
  planFeatures,
} from '@/services/profile.service.js'
</script>

<template>
  <div class="profile-page">

    <!-- ── Hero ─────────────────────────────────────────────────────────────── -->
    <section class="profile-hero">
      <div class="container">
        <div class="profile-hero__inner">

          <div class="profile-hero__identity">
            <div class="profile-avatar">{{ profileData.initials }}</div>
            <div class="profile-info">
              <h1 class="profile-name">
                {{ profileData.firstName }} {{ profileData.lastName }}
              </h1>
              <p class="profile-role">
                {{ profileData.title }} · {{ profileData.organisation }}
              </p>
              <div class="profile-meta">
                <span>
                  <i class="bi bi-geo-alt"></i> {{ profileData.location }}
                </span>
                <span>
                  <i class="bi bi-calendar3"></i> Member since {{ profileData.memberSince }}
                </span>
              </div>
            </div>
          </div>

          <div class="profile-hero__right">
            <div class="profile-stats">
              <div class="profile-stat" v-for="stat in profileStats" :key="stat.label">
                <span class="profile-stat__value">{{ stat.value }}</span>
                <span class="profile-stat__label">{{ stat.label }}</span>
              </div>
            </div>
            <div class="profile-hero__actions">
              <span class="plan-badge">
                <i class="bi bi-patch-check-fill"></i> {{ profileData.plan }} Member
              </span>
              <BaseButton variant="outline-white">Edit Profile</BaseButton>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── Body ─────────────────────────────────────────────────────────────── -->
    <section class="profile-body">
      <div class="container">
        <div class="profile-layout">

          <!-- Sidebar -->
          <aside class="profile-sidebar">

            <!-- Current Plan -->
            <div class="profile-card">
              <h6 class="profile-card__title">Current Plan</h6>
              <div class="plan-info">
                <span class="plan-name">{{ profileData.plan }}</span>
                <span class="plan-price">£499<span>/mo</span></span>
              </div>
              <ul class="plan-features">
                <li v-for="feature in planFeatures" :key="feature">
                  <span class="radio">
                    <svg class="checkbox-tick" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="white" stroke-width="1.8"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  {{ feature }}
                </li>
              </ul>
              <BaseButton variant="outline-light" :to="'/subscription'" class="plan-manage-btn">
                Manage Plan
              </BaseButton>
            </div>

            <!-- Contact -->
            <div class="profile-card">
              <h6 class="profile-card__title">Contact</h6>
              <ul class="contact-list">
                <li>
                  <i class="bi bi-envelope"></i>
                  <span>{{ profileData.email }}</span>
                </li>
                <li>
                  <i class="bi bi-linkedin"></i>
                  <span>{{ profileData.linkedin }}</span>
                </li>
                <li>
                  <i class="bi bi-geo-alt"></i>
                  <span>{{ profileData.location }}</span>
                </li>
              </ul>
            </div>

            <!-- Focus Areas -->
            <div class="profile-card">
              <h6 class="profile-card__title">Focus Areas</h6>
              <div class="focus-chips">
                <span class="focus-chip" v-for="area in focusAreas" :key="area">{{ area }}</span>
              </div>
            </div>

          </aside>

          <!-- Main content -->
          <div class="profile-main">

            <!-- Recent Activity -->
            <div class="profile-card">
              <h6 class="profile-card__title">Recent Activity</h6>
              <ul class="activity-list">
                <li v-for="item in recentActivity" :key="item.title" class="activity-item">
                  <span class="activity-tag">{{ item.tag }}</span>
                  <div class="activity-content">
                    <p class="activity-title">{{ item.title }}</p>
                    <span class="activity-date">{{ item.date }}</span>
                  </div>
                  <i class="bi bi-arrow-right activity-arrow"></i>
                </li>
              </ul>
            </div>

            <!-- Saved Content -->
            <div class="profile-card">
              <h6 class="profile-card__title">Saved Content</h6>
              <ul class="activity-list">
                <li v-for="item in savedContent" :key="item.title" class="activity-item">
                  <span class="activity-tag activity-tag--secondary">{{ item.tag }}</span>
                  <div class="activity-content">
                    <p class="activity-title">{{ item.title }}</p>
                  </div>
                  <i class="bi bi-bookmark activity-arrow"></i>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>

  </div>
</template>

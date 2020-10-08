<template>
  <v-app>
    <div class="bg-banner">
      <div class="navbar app-margin d-flex justify-space-between">
        <div :style="showMenu && isMobile ? 'z-index:11' : ''">
          <v-img
            :width="isMobile ? 150 : 250"
            src="../assets/logo/logo_emi.jpeg"
          />
        </div>
        <div class="ml-auto d-flex">
          <div :class="showMenu ? 'menu-show' : 'menu-hide'">
            <ul>
              <li class="mr-7">Home</li>
              <li class="mr-7">About</li>
              <li class="mr-7">Content</li>
              <li class="mr-7">Store</li>
              <li class="mr-7">Career</li>
              <li class="mr-7">Contact Us</li>
            </ul>
          </div>
          <div :style="showMenu && isMobile ? 'z-index:11' : ''">
            <v-btn
              text
              @click.prevent="showMenu ? (showMenu = false) : (showMenu = true)"
            >
              <v-img
                v-if="!showMenu"
                width="30"
                src="../assets/attr/Group3.png"
              />
              <v-icon
                large
                :color="showMenu && isMobile ? 'grey' : 'white'"
                v-else
                >mdi-close</v-icon
              >
            </v-btn>
          </div>
        </div>
      </div>
      <v-row class="app-margin">
        <v-col data-aos="fade-up" lg="7" class="banner-left">
          <h1 class="font-weight-bold primary--text">
            Now everyone can trade!
          </h1>
          <br />
          <h3 class="font-weight-light">
            help you manage risks in the Capital Market. Get stock education. No
            Need to Monitor Market
          </h3>
          <br />
          <v-btn x-large color="primary" depressed>REGISTER</v-btn>
        </v-col>
        <v-col data-aos="fade-up" lg="5" class="banner-right">
          <v-img
            :width="isMobile ? 300 : 450"
            src="../assets/attr/Group2.png"
          />
        </v-col>
      </v-row>
    </div>
    <div class="bg-content-line">
      <h1 data-aos="fade-up" class="font-weight-light primary--text">
        we make money, we change lives better
      </h1>
      <div
        data-aos="fade-up"
        class="app-margin d-flex flex-wrap mt-10"
        :class="isMobile ? 'justify-center' : 'justify-space-between'"
      >
        <v-card
          color="grey lighten-5"
          v-for="i in 3"
          :key="i"
          class=" mt-3"
          :class="isMobile ? 'ml-2 mt-2' : ''"
          :width="isMobile ? 300 : 500"
          :min-height="isMobile ? 400 : 520"
        >
          <v-img
            :height="isMobile ? '60%' : '70%'"
            :src="
              'https://image.freepik.com/free-photo/analyzing-data-close-up-young-businessman-who-holds-glasses-looks-gff-while-working-creative-office_146671-15029.jpg'
            "
          />
          <v-card-text class="text-left px-5">
            <h2>How to be a trader</h2>
            <h4 class="font-weight-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            </h4>
          </v-card-text>
          <v-card-actions class="px-5">
            <v-spacer />
            <v-btn color="primary" depressed>Read More</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <div class="bg-content-white">
      <div>
        <div class="app-margin d-flex justify-space-between">
          <div data-aos="fade-up">
            <h1 class="font-weight-light primary--text">
              Articles
            </h1>
          </div>
          <div data-aos="fade-up">
            <v-btn @click.prevent="slidePrev" color="primary" x-large icon>
              <v-icon large>mdi-arrow-left-circle-outline</v-icon>
            </v-btn>
            <v-btn @click.prevent="slideNext" color="primary" x-large icon>
              <v-icon large>mdi-arrow-right-circle-outline</v-icon>
            </v-btn>
          </div>
        </div>
        <hooper
          ref="carousel"
          data-aos="fade-up"
          :style="isMobile ? 'height: 300px' : 'height: 550px'"
          :itemsToShow="1.25"
          :centerMode="true"
        >
          <slide v-for="i in 5" :key="i">
            <v-card
              color="grey lighten-5"
              class="mt-2"
              :width="isMobile ? '95%' : '96%'"
              height="95%"
            >
              <v-img
                :aspect-ratio="16 / 9"
                :height="isMobile ? '60%' : '80%'"
                :src="
                  'https://img.freepik.com/free-photo/team-stockbrokers-are-having-conversation-dark-office-with-display-screens-analyzing-data-graphs-reports-investment-purposes-creative-teamwork-traders_146671-15017.jpg?size=626&ext=jpg'
                "
              />
              <v-card-text>
                <h2>Market Tends To Weakened Don't Panic!</h2>
                <h4 class="font-weight-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod
                </h4>
              </v-card-text>
            </v-card>
          </slide>
        </hooper>
      </div>
    </div>
    <div class="bg-content-grey">
      <div class="app-margin">
        <h1
          data-aos="fade-up"
          class="font-weight-light text-center primary--text"
        >
          Testimonial
        </h1>
        <hooper data-aos="fade-up" class="mt-10" :autoPlay="true">
          <slide v-for="i in 3" :key="i">
            <div class="text-center mr-7">
              <div :style="isMobile ? '' : 'width:50%; margin: 0 auto;'">
                <v-avatar color="teal" size="80">FJ</v-avatar>
                <div
                  class="font-weight-medium"
                  :class="isMobile ? 'mt-2' : 'mt-3'"
                >
                  Frankie De Jong
                </div>
                <div
                  class="font-weight-light"
                  :class="isMobile ? 'mt-2' : 'mt-3'"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </slide>

          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>
    </div>
    <div class="bg-content-white">
      <div data-aos="fade-up" class="app-margin text-center">
        <h1 class="font-weight-light primary--text">
          Start investing
        </h1>
        <div class="d-flex justify-center mt-5">
          <div class="mr-2">
            <v-img width="150" src="../assets/store/apple.png" />
          </div>
          <div class="ml-2">
            <v-img width="150" src="../assets/store/google.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-content-rect">
      <div class="app-margin text-center">
        <h1 data-aos="fade-up" class="font-weight-light white--text">
          Our Partners
        </h1>
        <div
          data-aos="fade-up"
          class="d-flex flex-wrap justify-center"
          style="margin: 0 auto;"
          :style="isMobile ? 'width:100%;' : 'width:50%;'"
        >
          <div v-for="i in 5" :key="i">
            <v-card
              class="rounded-lg mt-5 ml-1 mr-1"
              :width="isMobile ? '90' : '200'"
              :height="isMobile ? '35' : '70'"
            >
              <v-img
                height="100%"
                :src="
                  'https://image.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg'
                "
              />
            </v-card>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-content-white">
      <div data-aos="fade-up" class="app-margin">
        <v-row>
          <v-col lg="3">
            <v-img width="400" src="../assets/logo/logo_emi.jpeg" />
            <div class="d-flex justify-space-around">
              <div>
                <v-icon>mdi-instagram</v-icon>
              </div>
              <div>
                <v-icon>mdi-twitter</v-icon>
              </div>
              <div>
                <v-icon>mdi-facebook</v-icon>
              </div>
              <div>
                <v-icon>mdi-youtube</v-icon>
              </div>
            </div>
          </v-col>
          <v-spacer />
          <v-col lg="5">
            <div class="d-flex justify-space-between">
              <div>
                <div class="font-weight-bold">
                  Sitemap
                </div>
                <div class="mt-2">Home</div>
                <div class="mt-1">About</div>
                <div class="mt-1">Content</div>
                <div class="mt-1">Store</div>
              </div>
              <div>
                <div class="font-weight-bold">
                  Company
                </div>
                <div class="mt-2">Blog</div>
                <div class="mt-1">Careers</div>
              </div>
              <div>
                <div class="font-weight-bold">
                  Support
                </div>
                <div class="mt-2">FAQ</div>
                <div class="mt-1">Policy and Privacy</div>
                <div class="mt-1">Terms and Condition</div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mt-5 font-weight-light text-right">
            Ellen May Institute - Copyright © {{ new Date().getFullYear() }}
          </v-col>
        </v-row>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts" src="./app.ts"></script>

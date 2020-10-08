import { Hooper, Pagination as HooperPagination, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import { Component, Vue } from 'vue-property-decorator';


@Component({
  name: 'App',
  components: {
    Hooper,
    Slide,
    HooperPagination
  }
})
export default class App extends Vue {

  isMobile: boolean = this.$vuetify.breakpoint.mobile;
  windowWidth: number = window.innerWidth;
  showMenu: boolean = false;

  created() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
      this.isMobile = this.windowWidth <= 768 ? true : false;
    });

    window.addEventListener('scroll', () => {
      this.showMenu = false;
    });
  }
  slidePrev() {
    (this.$refs.carousel as any).slidePrev();
  }
  slideNext() {
    (this.$refs.carousel as any).slideNext();
  }
}
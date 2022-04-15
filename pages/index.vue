<template>
<body>

    <!-- Navbar  -->
       <!-- Banner Image  -->
       <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
         <div class="carousel-inner">
           <div class="carousel-item active w-100 vh-100" data-bs-interval="10000">
             <div class="d-flex d-block w-100 banner2 w-100 vh-100 align-items-center justify-content-center">
              <div class="text">
                <p class="p-effect">Paint Your</p>
                <p class="p-effect">
                  <span class="word wisteria">Passion.</span>
                  <span class="word belize">Dreams.</span>
                  <span class="word pomegranate">Fantasy.</span>
                  <span class="word green">Ideas.</span>
                </p>
                <p class="with"><em>With</em></p>
                <p id="no-ideas"><b>Priyanka Arts</b></p>
              </div>
             </div>
           </div>
           <div class="carousel-item w-100 vh-100" data-bs-interval="2000">
             <img srcset="../assets/img/banner-img3.jpg 800w, ../assets/img/banner-img2.jpg 480w" class="d-block w-100 vh-100" alt="..." sizes="(max-width: 600px) 480px,800px">
           </div>
           <div class="carousel-item w-100 vh-100">
             <div class="d-block w-100 banner1 w-100 vh-100">
             </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
         </button>
        </div>


      </div>

       <!-- Main Content Area -->

       <div id="body">

        <div class="gallery-index">
          <img class="img-gallery-index" src="../assets/img/gallery/1.jpg" alt="">
        </div>

        <h1 class="courses-text">Courses</h1>
        <div class="container-cards">
          <div class="card">
            <span></span>
            <div class="img"><img src="../assets/img/mandala-art.jpg"></div>
            <div class="content">
              <div>
                <h2>Card Title 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
            </div>
          </div>

          <div class="card">
            <span></span>
            <div class="img"><img src="../assets/img/sketching.jpg"></div>
            <div class="content">
              <div>
                <h2>Card Title 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
            </div>
          </div>

          <div class="card">
            <span></span>
            <div class="img"><img src="../assets/img/madhubani.jpg"></div>
            <div class="content">
              <div>
                <h2>Card Title 3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
            </div>
          </div>
        </div>



        <section id="sec">
          <div class="container">
              <div class="section-title">
                  <h2>Testimonials</h2>
                  <span class="section-separator"></span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
          </div>
          <div class="testimonials-carousel-wrap">
              <div class="listing-carousel-button listing-carousel-button-next"><i class="fa fa-caret-right" style="color: #fff"></i></div>
              <div class="listing-carousel-button listing-carousel-button-prev"><i class="fa fa-caret-left" style="color: #fff"></i></div>
              <div class="testimonials-carousel">
                  <div class="swiper-container">
                      <div class="swiper-wrapper">
                          <div class="swiper-slide">
                              <div class="testi-item">
                                  <div class="testi-avatar"><img src="../assets/img/21.jpg"></div>
                                  <div class="testimonials-text-before"><i class="fa fa-quote-right"></i></div>
                                  <div class="testimonials-text">
                                      <div class="listing-rating">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                      </div>
                                      <p class="testi-par">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                      <a href="#" class="text-link"></a>
                                      <div class="testimonials-avatar">
                                          <h3>John Doe</h3>
                                          <h4>Owner</h4>
                                      </div>
                                  </div>
                                  <div class="testimonials-text-after"><i class="fa fa-quote-left"></i></div>
                              </div>
                          </div>

                          <div class="swiper-slide">
                              <div class="testi-item">
                                  <div class="testi-avatar"><img src="../assets/img/3.jpg"></div>
                                  <div class="testimonials-text-before"><i class="fa fa-quote-right"></i></div>
                                  <div class="testimonials-text">
                                      <div class="listing-rating">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                      </div>
                                      <p class="testi-par">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                      <a href="#" class="text-link"></a>
                                      <div class="testimonials-avatar">
                                          <h3>Doe Boe</h3>
                                          <h4>Director</h4>
                                      </div>
                                  </div>
                                  <div class="testimonials-text-after"><i class="fa fa-quote-left"></i></div>
                              </div>
                          </div>
                          <!--third-->

                          <div class="swiper-slide">
                              <div class="testi-item">
                                  <div class="testi-avatar"><img src="../assets/img/4.jpg"></div>
                                  <div class="testimonials-text-before"><i class="fa fa-quote-right"></i></div>
                                  <div class="testimonials-text">
                                      <div class="listing-rating">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                      </div>
                                      <p class="testi-par">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                      <a href="#" class="text-link"></a>
                                      <div class="testimonials-avatar">
                                          <h3>Boe Doe</h3>
                                          <h4>Developer</h4>
                                      </div>
                                  </div>
                                  <div class="testimonials-text-after"><i class="fa fa-quote-left"></i></div>
                              </div>
                          </div>

                          <!--fourth-->
                          <div class="swiper-slide">
                              <div class="testi-item">
                                  <div class="testi-avatar"><img src="../assets/img/6.jpg"></div>
                                  <div class="testimonials-text-before"><i class="fa fa-quote-right"></i></div>
                                  <div class="testimonials-text">
                                      <div class="listing-rating">
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                          <i class="fa fa-star"></i>
                                      </div>
                                      <p class="testi-par">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                      <a href="#" class="text-link"></a>
                                      <div class="testimonials-avatar">
                                          <h3>Doe John</h3>
                                          <h4>Designer</h4>
                                      </div>
                                  </div>
                                  <div class="testimonials-text-after"><i class="fa fa-quote-left"></i></div>
                              </div>
                          </div>
                          <!--testi end-->

                      </div>
                  </div>
              </div>

              <div class="tc-pagination"></div>
          </div>
        </section>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.8/swiper-bundle.min.js"></script>
        <script src="../assets/js/scripts.js"></script>

    </div>


       <div class="form">
         <div class="row pad-mar">
           <div class="mt-3 mb-3 col-lg-6 revealOnScroll" data-animation="lightSpeedIn">
             <h3>
               GET IN TOUCH
             </h3>
             <p class="mt-4 text-secondary">
               Qui optio temporibus ut nihil tenetur ab saepe doloremque ut praesentium maxime. Eos voluptas galisum eum voluptatum fuga et sunt eveniet. Et minus reprehenderit in eveniet voluptatem et aperiam optio quo mollitia nemo 33 reiciendis galisum. Est incidunt enim rem fugiat animi non eius rerum.
             </p>
             <p class="text-secondary">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium.
             </p>
             <h4 class="text-dark">Address</h4>
             <p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum vitae enim ut pellentesque. Donec tincidunt molestie tortor, vitae ultricies neque eleifend ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus eleifend est enim. Donec quis molestie lorem, et posuere enim</p>
           </div>
           <div class="mt-3 mb-3 col-lg-6 revealOnScroll" data-animation="lightSpeedIn">
             <form>
               <div class="row">
                 <div class="form-floating mt-3 mb-3" style="width:40% !important">
                   <input type="text" class="form-control" id="Name" placeholder="Enter Name" name="Name">
                   <label for="Name" class="">&nbsp; Name</label>
                 </div>
                 <div class="form-floating mt-3 mb-3" style="width:60%">
                   <input type="text" class="form-control" id="Phone" placeholder="Enter Phone No." name="Phone">
                   <label for="Phone">&nbsp; Phone</label>
                 </div>
               </div>
               <div class="form-floating mt-3 mb-3">
                   <input type="text" class="form-control" id="email" placeholder="Enter password" name="pswd">
                   <label for="email">Email</label>
                   <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
               </div>
               <div class="form-floating mt-3 mb-3">
                   <textarea class="form-control" id="comment" name="text" placeholder="Comment goes here" style="max-height:200px; min-height: 200px"></textarea>
                   <label for="comment">Comments</label>
               </div>
               <div class="mb-3 form-check">
                 <input type="checkbox" class="form-check-input" id="exampleCheck1">
                 <label class="form-check-label" for="exampleCheck1">Check me out</label>
               </div>
               <div class="sub-div">
                 <button type="submit" class="btn btn-info sub">Submit</button>
               </div>
             </form>
           </div>
         </div>
        </div>

      <footer>
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <ul class="social_icon">
          <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
        </ul>
        <ul class="menu">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <p>©2021 Priyanka Arts | All Rights Reserved</p>
      </footer>

       <nav id="navbar" class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3" role="navigation">
         <div class="container-fluid">
           <a class="navbar-brand" href="#">Priyanka Arts</a>
           <button
             class="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarNav"
             aria-controls="navbarNav"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >

             <span class="navbar-toggler-icon"></span>
           </button>

           <div class="collapse navbar-collapse" id="navbarNav">
             <div class="mx-auto"></div>
             <ul class="navbar-nav">
               <li class="nav-item">
                 <a class="nav-link text-white" >Home</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link text-white" >About</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link text-white" >Gallery</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link text-white" href="#">Pricing</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link text-white" href="#">Contact</a>
               </li>
             </ul>
           </div>
         </div>
       </nav>

  </body>
</template>
<script>

export default {
  data(){
    return {}

  },
  methods:{




  },
  mounted(){
     $(document).ready(function(){
            $('.card').on('mouseenter',function(e){
              x = e.pageX - $(this).offset().left,
              y = e.pageY - $(this).offset().top;
              $(this).find('span').css({top:y, left:x})
            })
            $('.card').on('mouseout',function(e){
              x = e.pageX - $(this).offset().left,
              y = e.pageY - $(this).offset().top;
              $(this).find('span').css({top:y, left:x})
            })
          })
          //------------------------------------------------------------
            var nav = document.getElementById("navbar");

          window.addEventListener('scroll', function () {
              if (window.pageYOffset > 300) {
                  nav.classList.add('bg-dark', 'shadow');
              } else {
                  nav.classList.remove('bg-dark', 'shadow');
              }
          });

          var words = document.getElementsByClassName('word');
          var wordArray = [];
          var currentWord = 0;

          words[currentWord].style.opacity = 1;
          for (var i = 0; i < words.length; i++) {
            splitLetters(words[i]);
          }

          function changeWord() {
            var cw = wordArray[currentWord];
            var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
            for (var i = 0; i < cw.length; i++) {
              animateLetterOut(cw, i);
            }

            for (var i = 0; i < nw.length; i++) {
              nw[i].className = 'letter behind';
              nw[0].parentElement.style.opacity = 1;
              animateLetterIn(nw, i);
            }

            currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
          }

          function animateLetterOut(cw, i) {
            setTimeout(function() {
              cw[i].className = 'letter out';
            }, i*80);
          }

          function animateLetterIn(nw, i) {
            setTimeout(function() {
              nw[i].className = 'letter in';
            }, 340+(i*80));
          }

          function splitLetters(word) {
            var content = word.innerHTML;
            word.innerHTML = '';
            var letters = [];
            for (var i = 0; i < content.length; i++) {
              var letter = document.createElement('span');
              letter.className = 'letter';
              letter.innerHTML = content.charAt(i);
              word.appendChild(letter);
              letters.push(letter);
            }

            wordArray.push(letters);
          }

          changeWord();
          setInterval(changeWord, 4000);
  }
}
</script>

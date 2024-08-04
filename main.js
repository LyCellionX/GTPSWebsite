$(document).ready(function () {
    // devtools
    $(document).on('keydown', function(e) {
      if (e.keyCode === 123 || (e.ctrlKey && e.keyCode === 'E'.charCodeAt(0)) ||
          (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) ||
          (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) ||
          (e.ctrlKey && e.shiftKey && e.keyCode === 'c'.charCodeAt(0)) ||
          (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) ||
          (e.ctrlKey && e.keyCode === 'S'.charCodeAt(0)) ||
          (e.ctrlKey && e.keyCode === 'H'.charCodeAt(0)) ||
          (e.ctrlKey && e.keyCode === 'A'.charCodeAt(0)) ||
          (e.ctrlKey && e.keyCode === 'F'.charCodeAt(0)) ||
          (e.ctrlKey && e.keyCode === 'E'.charCodeAt(0))) {
        e.preventDefault();
      }
    });
  
    $(document).on('contextmenu', function(e) {
      e.preventDefault();
    });
  
  //   $(window).on('blur', function(event) {
  //       setTimeout(function() {
  //         if (console.clear) {
  //           window.location.href = "./index.html"
  //           alert("open the web again");
  //         }
  //       }, 0);
  //     });
  
  
    //redirect button
    $("#discord, #discordd").on("click", function () {
      window.location.href = "https://chat.whatsapp.com/IT6U40c6zEKDFufTSaB0N3";
    });
    $(".contactbtn").on("click", function () {
      window.location.href = "https://chat.whatsapp.com/IT6U40c6zEKDFufTSaB0N3";
    });
    $("#hc-discord").on("click", function () {
      window.location.href = "https://chat.whatsapp.com/IT6U40c6zEKDFufTSaB0N3";
    });
    $("#whatsapp, .nnav-btn #whatsapp").on("click", function () {
      window.location.href = "https://chat.whatsapp.com/IT6U40c6zEKDFufTSaB0N3";
    });
    $("#discord-fery").click(function () {
      window.location.href = "https://wa.me/6287777870536";
    });
    $("#discord-tron").click(function () {
      window.location.href = "https://wa.me/6283874499599";
    });
    $("#discord-sneevilz").click(function () {
      window.location.href = "https://wa.me/6281262470639";
    });
    $(".purchase").click(function () {
      window.location.href = "https://chat.whatsapp.com/IT6U40c6zEKDFufTSaB0N3";
    });
    $('#saweria, #saweriay').click(function() {
      window.location.href = "https://saweria.co/"
    })
  
    //scroll navbar
    var prevScrollpos = $(window).scrollTop();
    $(window).scroll(function () {
      var currentScrollPos = $(this).scrollTop();
      if (prevScrollpos > currentScrollPos && currentScrollPos === 0) {
        $(".navbar").css({
          background: "rgba(255,255,255,0",
          "box-shadow": "0 4px 30px rgba(0,0,0,0)",
          "backdrop-filter": "blur(6.7px)",
          "-webkit-backdrop-filter": "blur(6.7px)",
          border: "1px solid rgba(255,255,255,0)",
        });
      } else {
        $(".navbar").css({
          background: "rgba(255,255,255,0",
          "box-shadow": "0 4px 30px rgba(0,0,0,0)",
          "backdrop-filter": "blur(6.7px)",
          "-webkit-backdrop-filter": "blur(6.7px)",
          "border-bottom": "1px solid rgba(255,255,255,0.2)",
        });
      }
      prevScrollpos = currentScrollPos;
    });
  
    //androidhost handler
  //   var content1 = {
  //     h4: "POWERTUNNEL",
  //     p: '1. Download and Install": <span class="powertunnel" id="install-host-apk"><a href="https://android.izzysoft.de/repo/apk/io.github.krlvm.powertunnel.android">PowerTunnel APK</a></span><br>2. Open Plugin button beside Setting button.<br>3. Find Hosts and open the Setting.<br>4. Type the link on bellow: "<span id="hostlink">https://growtopia.id/android.txt</span>"<br>5. Set "Host File Update Period" to ON START<br>6. Back and click on "CONNECT" button.<br>7. Open Growtopia and Connect!',
  //   };
  
  //   var content2 = {
  //     h4: "VIRTUAL HOST",
  //     p: '1. Download and Install: <span class="virtualhost" id="install-host-apk"><a href="https://www.apkshub.com/app/com.github.xfalcon.vhosts">Virtual Host APK</a></span><br>2. Download Host: <span id="install-host-apk"><a href="./installhost/installhost.html">Download Host Here</a></span>.<br>3. After install, open Virtual Host and click on "SELECT HOSTS FILE".<br>4. Find the Host file and click it.<br>5. Open Growtopia and Connect!',
  //   };
  
  //   var content3 = {
  //     h4: "HOSTS GO",
  //     p: '1. Download and Install(No Root): <span class="hostsgo" id="install-host-apk"><a href="https://www.mediafire.com/file/ctly08te3i8rlwq/%28No_root%29_Hosts_Go_2.1.9_Apkpure.apk/file">Hosts GO APK</a></span><br>2. Open Host GO and Click on "Hosts Editor".<br>3. Click checkbox on the right, and Click "Download Hosts File".<br>4. Type the link on bellow: "<span id="hostlink">https://growtopia.id/android.txt</span>"<br>5. Click on "Download and Apply".<br>6. Back and click on "START".<br>7. Open Growtopia and Connect!',
  //   };
  
  //   var contents = [content1, content2, content3];
  //   var currentIndex = 0;
  
  //   $(".detail-title svg").click(function () {
  //     var currentContent = contents[currentIndex];
  //     $("#android h4").text(currentContent.h4);
  //     $("#android p").html(currentContent.p);
  //     currentIndex = (currentIndex + 1) % contents.length;
  //   });
  
    //mac windows host handler
  //   var cont1 = {
  //     h4: "Mac",
  //     p: '1. Open Finder and, in the Finder menu bar, select Go > Go to Folder.<br>2. Type /private/etc/hosts in the textbox and press Return.<br>3. Move hosts file to Desktop.<br>4. Open the hosts file, and add in the IP: <br><span id="hostlink">92.246.138.68 www.growtopia1.com<br>92.246.138.68 www.growtopia2.com</span><br>5. Save the file and return it to original location',
  //   };
  
  //   var cont2 = {
  //     h4: "Windows",
  //     p: '1. Press Win+R (Windows Key + R).<br>2. Type in C:WindowsSystem32driversetc in the textbox.<br>3. Find file named "hosts".<br>4. Right-click on "hosts" file and edit it with Notepad/text editor.<br>5. Add in the IP: <br><span id="hostlink">92.246.138.68 www.growtopia1.com<br>92.246.138.68 www.growtopia2.com</span><br>6. Save the file, then open Growtopia',
  //   };
  
  //   var contentss = [cont1, cont2];
  //   var currentIndexx = 0;
  
  //   $(".tutorial-icon svg").click(function () {
  //     var currentContentt = contentss[currentIndexx];
  //     $("#winmac h4").text(currentContentt.h4);
  //     $("#winmac p").html(currentContentt.p);
  //     currentIndexx = (currentIndexx + 1) % contentss.length;
  //   });
  
    //scroll btn
    $("#home, .homee").click(function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  
    $("#about, .homecontent #hc-btn").click(function () {
      let targetElement = $(".about");
      let targetPosition = targetElement.offset().top;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  
    $("#tutorial, .homecontent #tutorial").click(function () {
      let targetElement = $(".tutorial");
      let targetPosition = targetElement.offset().top;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  
    $("#roles, .roless").click(function () {
      let targetElement = $(".roles");
      let targetPosition = targetElement.offset().top;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  
    //check nav active
    function setActiveNav() {
      var sections = $(".home, .about, .tutorial, .roles");
      var navItems = $(".navlist li");
  
      $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        sections.each(function () {
          var sectionTop = $(this).offset().top - 50;
          var sectionClass = $(this).attr("class").split(" ")[0];
          if (currentScroll >= sectionTop) {
            navItems.removeClass("active");
            $(".navlist, .mobile-navlist")
              .find("#" + sectionClass)
              .addClass("active");
          }
        });
      });
    }
    function setActiveNav2() {
      var sections = $(".home, .about, .tutorial, .roles");
      var navItems = $(".mobile-navlist li");
  
      $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();
        sections.each(function () {
          var sectionTop = $(this).offset().top - 50;
          var sectionClass = $(this).attr("class").split(" ")[0];
          if (currentScroll >= sectionTop) {
            navItems.removeClass("active");
            $(".mobile-navlist")
              .find("#" + sectionClass)
              .addClass("active");
          }
        });
      });
    }
  
    setActiveNav();
    setActiveNav2();
  
    //rolesdetail
    $(".detail").click(function () {
      var dataId = $(this).attr("data-id");
      window.location.href = "./detail/details.html?id=" + dataId;
      console.log("zzz");
    });
  
    //hamburger-menu
    $('.hamburger-menu').click(function() {
      $('.navbar').css('border', 'none')
      $('.hamburger-menu').fadeOut('fast', function() {
        $('.cancel-menu').fadeIn('fast')
        $('.mobile-nav').slideDown('800').css('display','flex').fadeIn('fast')
      })
    })
    $('.cancel-menu').click(function() {
      $('.cancel-menu').fadeOut('fast', function() {
        $('.hamburger-menu').fadeIn('fast')
        $('.mobile-nav').slideUp('800').css('display','flex').fadeOut('fast')
      })
    })
  
    //loading
    var loadingEl = $('.loader');
    loadingEl.hide();
  });

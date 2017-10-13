var TonyShare = {
    ShareWebSite: function (shareplatform, shareobj) {
        shareobj.click(function () {
            shareobj.attr('href', 'http://www.jiathis.com/send/?webid=' + shareplatform + '&url=' + location.href + '&title=' + document.title + '&summary=' + jQuery('meta[name="description"]').attr('content') + '');
            return true;
        });
    },
    SharePic: function (shareplatform, shareobj, picobj) {
        shareobj.click(function () {
            shareobj.attr('href', 'http://www.jiathis.com/send/?webid=' + shareplatform + '&url=' + location.href + '&title=' + document.title + '&pic=http://' + location.hostname + picobj.attr("src") + '&summary=' + jQuery('meta[name="description"]').attr('content') + '');
            return true;
        });
    }
}
$(function () {

    TonyShare.ShareWebSite("qzone", $(".share .qq"));
    TonyShare.ShareWebSite("weixin", $(".share .weixin"));
    TonyShare.ShareWebSite("tsina", $(".share .weibo"));

    setNavMHeight();

    $(".navBtn").click(function () {
        if ($(this).hasClass("navShow")) {
            $(this).removeClass("navShow")
            $(".navM").slideUp();
        } else {
            $(this).addClass("navShow")
            $(".navM").slideDown();
        }

        return false;
    });

    $(".navBtn2").click(function () {
        if ($(this).hasClass("navShow")) {
            $(this).removeClass("navShow")
            $(".nav").animate({ left: 0, opacity: "show" });

        } else {
            $(this).addClass("navShow")
            $(".nav").animate({ left: 50, opacity: "hide" });
        }

        return false;


    });

    $(window).resize(function () {
        setNavMHeight();
    });

    $(window).scroll(function () {
        var sT = $(window).scrollTop();
        if (sT > 0) {
            $(".head").addClass("headFixed");
        } else {
            $(".head").removeClass("headFixed");
        }

    });

    function setNavMHeight() {
        $(".navM").height($(window).height() - 56);
    }



});

$(document).ready(() => {
  //navElem Underlines
  var $item = $(".navElem").not(".active");
  var dataItem;
  var $line;
  $item.on("mouseenter", event => {
    dataItem = $(event.currentTarget).attr("data-item");
    $lineSVG = $("[data-line = '" + dataItem + "']");
    $lineSVG.stop();
    $lineSVG.animate({width: "show"}, 100);
  }).on("mouseleave", event => {
    $lineSVG.stop();
    $lineSVG.animate({width: "hide"}, 100);
  });
  //Dropdown Menus
  var $ddownLink = $(".dropdown-content").children();
  var $ddownSpan;
  $ddownLink.on("mouseenter", event => {
    $ddownSpan = $(event.currentTarget).children();
    $ddownSpan.stop();
    $ddownSpan.animate({marginLeft: "5px"});
  }).on("mouseleave", event => {
    $ddownSpan.stop();
    $ddownSpan.animate({marginLeft: "0px"});
  });
  //Banner Outline
  var orgStroke = $(".bannerPolygon").css("stroke");
  $(".bannerPolygon").on("mouseenter", () => {
    $(".bannerPolygon").css("stroke", "#39CCCC"); //NOTE: Xiao's recommendation for colour
  }).on("mouseleave", () => {
    $(".bannerPolygon").css("stroke", orgStroke);
  });
});//document ready

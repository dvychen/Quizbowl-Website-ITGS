$(document).ready(() => {
  //navElem Underlines
  var $item = $(".navElem").not(".active");
  var dataItem;
  var $line;
  $item.on("mouseenter", event => {
    dataItem = $(event.currentTarget).attr("data-item");
    $line = $("[data-line = '" + dataItem + "']");
    $line.stop();
    $line.animate({width: "show"}, 100);
  }).on("mouseleave", event => {
    $line.stop();
    $line.animate({width: "hide"}, 100);
  });
  //Banner Outline
  var orgStroke = $(".bannerPolygon").css("stroke");
  $(".bannerPolygon").on("mouseenter", () => {
    $(".bannerPolygon").css("stroke", "#39CCCC");
  }).on("mouseleave", () => {
    $(".bannerPolygon").css("stroke", orgStroke);
  });
  //End of navbar
});

const pug = require("pug");
var sass = require("node-sass");

// Compile the source code
const compiledFunction = pug.compileFile("aboutUs.pug");

sass.render(
  {
    file: aboutUsSASS.css,
  },
  function (err, result) {
    if (err) console.log(err);
  }
);

$("#group-photo").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".p02").offset().top,
    },
    2000
  );
});

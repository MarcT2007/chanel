// Počakaj, da se stran naloži
window.addEventListener("load", function () {

  // Pridobi canvas in context
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Nastavitve risanja
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineJoin = "round";

  // Začni risanje
  ctx.beginPath();

  // ===== ZUNANJA OBLIKA =====
  ctx.moveTo(161,561);
  ctx.bezierCurveTo(161,561,205,642,285,659);
  ctx.bezierCurveTo(376,686,451,640,451,640);
  ctx.bezierCurveTo(451,640,526,687,618,656);
  ctx.bezierCurveTo(698,637,739,560,739,560);
  ctx.lineTo(681,526);
  ctx.bezierCurveTo(681,526,656,575,598,592);
  ctx.bezierCurveTo(547,607,511,591,511,591);
  ctx.bezierCurveTo(511,591,533,563,545,530);
  ctx.bezierCurveTo(562,494,560,452,560,452);
  ctx.bezierCurveTo(560,452,563,412,547,380);
  ctx.bezierCurveTo(537,343,510,313,510,313);
  ctx.bezierCurveTo(510,313,556,297,601,314);
  ctx.bezierCurveTo(652,328,682,379,682,379);
  ctx.lineTo(739,344);
  ctx.bezierCurveTo(739,344,697,266,610,245);
  ctx.bezierCurveTo(526,221,451,265,451,265);
  ctx.bezierCurveTo(451,265,377,221,293,244);
  ctx.bezierCurveTo(206,264,161,344,161,344);
  ctx.lineTo(220,379);
  ctx.bezierCurveTo(220,379,248,330,300,314);
  ctx.bezierCurveTo(343,297,391,313,391,313);
  ctx.bezierCurveTo(391,313,365,343,352,380);
  ctx.bezierCurveTo(338,415,340,452,340,452);
  ctx.bezierCurveTo(340,452,339,488,351,521);
  ctx.bezierCurveTo(364,558,390,591,390,591);
  ctx.bezierCurveTo(390,591,344,608,300,590);
  ctx.bezierCurveTo(251,577,220,526,220,526);
  ctx.lineTo(161,561);
  ctx.closePath();

  // ===== NOTRANJA LUKNJA =====
  ctx.moveTo(482,504);
  ctx.bezierCurveTo(472,533,450,555,450,555);
  ctx.bezierCurveTo(450,555,433,539,418,507);
  ctx.bezierCurveTo(407,482,407,452,407,452);
  ctx.bezierCurveTo(407,452,409,421,420,396);
  ctx.bezierCurveTo(431,370,450,349,450,349);
  ctx.bezierCurveTo(450,349,471,372,480,395);
  ctx.bezierCurveTo(491,423,493,452,493,452);
  ctx.bezierCurveTo(493,452,494,481,482,504);
  ctx.closePath();

  // Zapolni in nariši obris
  ctx.fill("evenodd"); // pomembno za luknjo
  ctx.stroke();
});

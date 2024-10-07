/** Json by @Rem **/
var app = new (function () {
  (this.name = "Full Stop Punctuation"),
    (this.version = "."),
    (this.date = "2024"),
    (this.folder = "asset-v4/"),
    (this.looptime = 6486),
    (this.bpm = 148),
    (this.totalframe = 312),
    (this.nbpolo = 7),
    (this.nbloopbonus = 6),
    (this.bonusloopA = !0),
    (this.bonusendloopA = !1),
    (this.recmaxloop = 34),
    (this.recminloop = 4),
    (this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop),
    (this.spritepolo = "polo-sprite.png"),
    (this.spritepicto = "game-picto.png"),
    (this.colBck = "#000000"),
    (this.col0 = "#CD9459"),
    (this.col1 = "#CD9459"),
    (this.col2 = "#382615"),
    (this.col3 = "#795331"),
    (this.col4 = "#ffe5c1"),
    (this.animearray = [
      { name: "1_ignited_drummer", color: "CD9459", uniqsnd: !0 },
      { name: "2_disaster_tim", color: "CD9459", uniqsnd: !0 },
      { name: "3_criminal", color: "CD9459", uniqsnd: !0 },
      { name: "4_ripperface", color: "CD9459", uniqsnd: !1 },
      { name: "5_henry", color: "CD9459", uniqsnd: !0 },
      { name: "6_scarymaze", color: "CD9459", uniqsnd: !1 },
      { name: "7_chase", color: "CD9459", uniqsnd: !0 },
      { name: "8_mouth", color: "CD9459", uniqsnd: !1 },
      { name: "9_01001001_01010100", color: "CD9459", uniqsnd: !1 },
      { name: "10_manpig", color: "CD9459", uniqsnd: !0 },
      { name: "11_aaaaaaaaaaaaaaaaaaaaaaaa", color: "CD9459", uniqsnd: !1 },
      { name: "12_alone", color: "CD9459", uniqsnd: !1 },
      { name: "13_brassophone", color: "CD9459", uniqsnd: !1 },
      { name: "14_dolphin_muzzle", color: "CD9459", uniqsnd: !1 },
      { name: "15_habdaey", color: "CD9459", uniqsnd: !1 },
      { name: "16_Jacko", color: "CD9459", uniqsnd: !1 },
      { name: "17_ignited_samara", color: "CD9459", uniqsnd: !1 },
      { name: "18_phantom_rafe", color: "CD9459", uniqsnd: !1 },
      { name: "19_sam", color: "CD9459", uniqsnd: !1 },
      { name: "20_ø·ø ̈ùšù„ø© ø£øoù†ùšø©", color: "61141B", uniqsnd: !1 },
    ]),
    (this.bonusarray = [
      {
        name: "Severed",
        src: "c4-b1-severed-hb.mp4",
        code: "1,7,11,13,16",
        sound: "bonus-severed",
        aspire: "aspire-severed",
      }
    ]),
    (this.unlockerarray = []);
  for (var n = 0, a = this.animearray.length; n < a; n++) {
    var i = this.animearray[n].name;
    (this.animearray[n].soundA = i + "_a"),
      (this.animearray[n].soundB = this.animearray[n].uniqsnd
        ? i + "_a"
        : i + "_b"),
      (this.animearray[n].anime = i + "-sprite.png"),
      (this.animearray[n].animeData = i + ".json");
  }
})();
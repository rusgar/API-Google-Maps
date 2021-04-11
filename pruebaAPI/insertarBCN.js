(function () {
        var setting = {
          "height":557,
          "width":792,
          "zoom":16,
          "queryString":"Carrer del Rosselló, 272, Barcelona, España",
          // "place_id":"ChIJy6Zx0-qipBIRziYpNEmqvjc",
          // "satellite":false,
          "centerCoord":[41.39881466399979,2.164814499999994],
          // "cid":"0x37beaa49342926ce",
          "lang":"es",
          "cityUrl":"/spain/barcelona",
          "cityAnchorText":"Mapa de Barcelona, Cataluña, España",
          "id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3",
          "embed_id":"415767"
        };
        var d = document;
        var s = d.createElement('script');
        s.src = 'https://1map.com/js/script-for-user.js?embed_id=415767';
        s.async = true;
        s.onload = function (e) {
          window.OneMap.initMap(setting)
        };
        var to = d.getElementsByTagName('script')[0];
        to.parentNode.insertBefore(s, to);
      })();

  
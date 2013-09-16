qflipper.js
=====

つくってるなう

## Get Started

> HTML

```html
<html><head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0, maximum-scale=10">
  <script src="jquery.js"></script>
  <script src="underscore.js"></script>
  <script src="qflipper.js"></script>
  
  <link rel="stylesheet" href="qflick.css" media="all" type="text/css">
  <script src="script.js"></script>
</head><body>

<section>
  <div class="qflipperView">
    <div id="qflipper" class="qflipper">
      <div class="item">
        <p class="sentence">1</p>
      </div>
      <div class="item">
        <p class="sentence">2</p>
      </div>
      <div class="item">
        <p class="sentence">3</p>
      </div>
    </div>
  </div>

  <div>
    <button id="moveToNext">next</button>
    <button id="moveToPrev">prev</button>
  </div>
  <div>
    <input type="text" id="input" value="0">
    <button id="moveToPoint">point</button>
  </div>
  <div>
    <button id="refresh">refresh</button>
  </div>

</body></html>
```

> CSS

```css
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.qflipperView {
  width: 320px;
  margin-right: auto;
  margin-left: auto;
}
.qflipper {
}
.item {
  width: 320px;
  float: left;
}
```

> JavaScript

```JS
$(function(){
  var qflipper = new Q.Flipper();
  qflipper.start('#qflipper', {type: 'simple'});

  $('#moveToNext').on('click', function(){
    qflipper.toNext();
  });

  $('#moveToPrev').on('click', function(){
    qflipper.toPrev();
  });

  $('#moveToPoint').on('click', function(){
    qflipper.moveToPoint(parseInt($('#input').val()));
  });

  $('#refresh').on('click', function(){
    qflipper.refresh();
  });
});
```

&copy; funnythingz

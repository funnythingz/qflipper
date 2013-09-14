qflick.js
=====

qflick.js is implemented in TypeScript

## Get Started

> HTML

```html
<html><head>
  <script src="zepto.js"></script>
  <script src="underscore.js"></script>
  <script src="qflick.js"></script>
</head><body>

<div class="qflickView">
  <div id="qflick" class="qflick">
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

<script>
  var qflick = new Qflick();
  qflick.start('#qflick');
</script>

</body></html>
```

> CSS

```css
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.qflickViwe {
  width: 320px;
  margin-right: auto;
  margin-left: auto;
}
.qflick {
}
.item {
  width: 280px;
  float: left;
}
```

&copy; funnythingz

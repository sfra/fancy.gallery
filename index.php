<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="node_modules/normalize.css/normalize.css" />
    <link rel="stylesheet" href="css/index.css" />
    <script type="text/javascript" src="scripts/gallery.js"></script>
</head>
<body>
    <h1>fancy gallery plugin</h1>
    <div id="fancy-gallery"></div>
    <form>
    <label>Select a plugin </label>
    <select id="fancy-gallery-plugin">
        <?php
            include_once 'php/selectPlugin.php';
        ?>
    </select>
    <label>Select a sequence</label>
    <select id="fancy-gallery-sequence">
        <option>
            ordered
        </option>
        <option>random</option> 
    </select>
</form>


    <footer>
        webpage:
        <a target="_blank" href="https://github.com/sfra">© Szymon Frankowski 2018</a>
    </footer>
</body>
<script type="text/javascript" src="main.js"></script>
</html>

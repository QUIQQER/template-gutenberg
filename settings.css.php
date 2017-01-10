<?php

$menuBackground     = $Project->getConfig('templateGutenberg.settings.menuBackground');
$menuLinkColor      = $Project->getConfig('templateGutenberg.settings.menuLinkColor');
$menuLinkColorHover = $Project->getConfig('templateGutenberg.settings.menuLinkColorHover');
$buttonColorHover   = $Project->getConfig('templateGutenberg.settings.buttonColorHover');

ob_start();

?>

.menu,
.menu-wrap {
    background: <?php echo $menuBackground ?>;
}

.morph-shape {
    background: #fff;
    fill: <?php echo $menuBackground; ?>;
}

.logo a,
.quiqqer-navigation-entry a {
    color: <?php echo $menuLinkColor; ?>;
}

.logo a:hover,
.menu-button-close:hover,
.quiqqer-navigation-entry a:hover {
    color: <?php echo $menuLinkColorHover; ?>;
}

button:hover,
.button:hover {
    border-color: <?php echo $buttonColorHover; ?>
}

button:hover::before,
.button:hover::before {
    background-color: <?php echo $buttonColorHover; ?>;
}

.menu-button:hover,
.menu-button:hover::before {
    background-color: transparent;
    color: #222 !important;
}

<?php

return ob_get_clean();

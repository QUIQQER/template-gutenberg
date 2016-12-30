<?php

/**
 * Emotion
 */
QUI\Utils\Site::setRecursivAttribute($Site, 'image_emotion');

/**
 * Breadcrumb
 */
$Breadcrumb = new QUI\Controls\Breadcrumb();

/**
 * Template config
 */

$Engine->assign(array(
    'Project'    => $Project,
    'Site'       => $Site,
    'Template'   => $Template,
    'Breadcrumb' => $Breadcrumb,
    'Menu'       => new \QUI\Controls\Navigation(),
    'BricksManager'  => \QUI\Bricks\Manager::init()
));

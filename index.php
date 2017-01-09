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
 * Color settings
 */
//
//$Engine->assign(array(
//    'menuBackground'     => '#373a47',
//    'menuLinkColor'      => '#b8b7ad',
//    'menuLinkColorHover' => '#c94e50'
//));

$Engine->assign(array(
    'menuBackground'     => '#373a47',
    'menuLinkColor'      => '#b8b7ad',
    'menuLinkColorHover' => '#c94e50',
    'buttonColorHover'   => 'blue'
));

/**
 * Template config
 */

$Engine->assign(array(
    'Project'       => $Project,
    'Site'          => $Site,
    'Template'      => $Template,
    'Breadcrumb'    => $Breadcrumb,
    'Menu'          => new \QUI\Controls\Navigation(),
    'BricksManager' => \QUI\Bricks\Manager::init()
));

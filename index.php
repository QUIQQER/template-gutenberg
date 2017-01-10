<?php

/**
 * Emotion
 */
//QUI\Utils\Site::setRecursivAttribute($Site, 'image_emotion');

$emotion = '';

if ($Site->getAttribute('image_emotion')) {
    try {
        $Emotion = \QUI\Projects\Media\Utils::getImageByUrl($Site->getAttribute('image_emotion'));
        $emotion = $Emotion->getSizeCacheUrl(1600, 1600);
    } catch (QUI\Exception $Exception) {
    }
}

$Engine->assign('emotion', $emotion);

/**
 * Breadcrumb
 */
$Breadcrumb = new QUI\Controls\Breadcrumb();

/**
 * Color settings
 */

$cssSettings = include 'settings.css.php';

$Engine->assign(array(
    'customCSS' => '<style>' . $cssSettings . '</style>'
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

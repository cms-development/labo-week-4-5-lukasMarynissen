<?php


/**
 * Template Name: Creatures
 * Description: Creatures
 */

$context = Timber::get_context();

$args = array(
    // Get post type project
    'post_type' => 'creature',
    // Get all posts
    'posts_per_page' => -1,
    // Order by post date
    'orderby' => array(
        'date' => 'DESC'
    )
);

$context['post'] = new TimberPost();
$context['creatures'] = Timber::get_posts( $args );

Timber::render( 'page-creatures.twig', $context );
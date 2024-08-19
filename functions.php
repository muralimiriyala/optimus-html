<?php

if ( ! function_exists( 'optimussbr_setup' ) ) {
	
	function optimussbr_setup() {
		
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		
		add_theme_support( 'title-tag' );

		add_theme_support(
			'post-formats',
			array(
				'link',
				'aside',
				'gallery',
				'image',
				'quote',
				'status',
				'video',
				'audio',
				'chat',
			)
		);

		
		add_theme_support( 'post-thumbnails' );
		set_post_thumbnail_size( 1568, 9999 );

		register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary menu', 'optimussbr' ),
				'footer'  => __( 'Secondary menu', 'optimussbr' ),
			)
		);

		add_theme_support(
			'html5',
			array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
				'navigation-widgets',
			)
		);		
	}
}
add_action( 'after_setup_theme', 'optimussbr_setup' );

function optimussbr_scripts() {
	$p_cache = rand();
	
	wp_enqueue_style( 'optimussbr-style', get_template_directory_uri() . '/style.css', array(), ''.$p_cache.'' );
	wp_enqueue_style('core-bundle-style',  get_template_directory_uri() . '/core.bundle.css', array(), ''.$p_cache.'', 'all');
	wp_enqueue_script('core-bundle-script',  get_template_directory_uri() . '/dist/core.bundle.js', array(), ''.$p_cache.'', 'all');
	if (is_page_template('templates/our-culture.php')) {
		wp_enqueue_style( 'magnific-popup-style', get_template_directory_uri() . '/css/magnific-popup.css', array(), ''.$p_cache.'' );
        wp_enqueue_script('magnific-popup-script',  get_template_directory_uri() . '/js/jquery.magnific-popup.min.js', array(), ''.$p_cache.'', 'all');
        wp_enqueue_script('custom-magnific-popup-script',  get_template_directory_uri() . '/js/custom-magnific-popup.js', array(), ''.$p_cache.'', 'all');
    }
	// if (is_page_template('templates/contact.php')) {
    //     wp_enqueue_style('formidable-css', 'https://aecon.parachutedevelopment.ca/wp-content/plugins/formidable/css/formidableforms.css?ver=1222430', array(),  null, 'all' );
    // }
	wp_enqueue_script('font-awesome', 'https://kit.fontawesome.com/daf2e8de71.js', array(), null, true);

	if(is_category() ){
		wp_enqueue_script( 'ajax-loadmore', get_stylesheet_directory_uri() . '/dist/load-more.js">', array('jquery'), ''.$p_cache.'' );
    }
	if (is_page_template('templates/about.php')) {
        wp_dequeue_script('page-scroll-to-id-plugin-script-js-extra');
    }
	// if (is_search()) {
    //     wp_enqueue_script('ajax-loadmore-search', get_stylesheet_directory_uri() . '/dist/load-more.js', array('jquery'), null, true);
    // }
	
}
add_action( 'wp_enqueue_scripts', 'optimussbr_scripts' );



if( function_exists('acf_add_options_sub_page') )
{
   acf_add_options_sub_page(array(
       'title' => 'Header Options',
       'parent' => 'themes.php',
   ));
}

if(function_exists('acf_add_options_sub_page')) {
       acf_add_options_sub_page(array(
               'title' => 'Footer Options',
               'parent' => 'themes.php',
       ));
}

// if(function_exists('acf_add_options_sub_page')) {
//        acf_add_options_sub_page(array(
//                'title' => 'Sidebar CTA',
//                'parent' => 'themes.php',
//        ));
// }

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

function get_optimussbr_banner(){

		$banner_image_2x = get_field('banner_image_2x');
		$banner_image_t_2x = get_field('banner_image_tablet_2x');
		$banner_image_m_2x = get_field('banner_image_mobile_2x');
		$banner_image_tablet_2x = $banner_image_t_2x ? $banner_image_t_2x : $banner_image_2x;
		$banner_image_mobile_2x = $banner_image_m_2x ? $banner_image_m_2x : $banner_image_2x;
		$banner_h = get_field('banner_heading');
		if(empty($banner_h)){
			$banner_heading = get_the_title();
		} else {
			$banner_heading = $banner_h;
		}
		$banner_button_text = get_field('banner_button_text');
		$banner_button_link = get_field('banner_button_link');
		if(is_page(array(2))){
			$banner_main_cls = "";
		} else {
			$banner_main_cls = "banner-center";
		}

	if(!empty($banner_image_2x || $banner_heading)){ ?>
		<section class="hero-banner-section pos-relative">
		<?php if(!empty($banner_image_2x)){ ?>
			<picture class="object-fit background-bg">
			    <source srcset="<?php echo $banner_image_2x['url']; ?>" media="(min-width: 1024px)" />
			    <source srcset="<?php echo $banner_image_tablet_2x['url']; ?>" media="(min-width: 768px)" />
			    <img srcset="<?php echo $banner_image_mobile_2x['url']; ?>" alt="<?php echo $banner_image_2x['alt']; ?>"/>
			</picture>
		<?php } ?>
			<div class="container md">
			    <div class="hero-banner-main flex flex-vcenter">
			        <div class="hero-banner-text">
			            <h1><?php echo $banner_heading; ?></h1>
			        <?php if(!empty($banner_button_text && $banner_button_link)){ ?>
			            <a href="<?php echo $banner_button_link; ?>" class="button"><?php echo $banner_button_text; ?></a>
			        <?php } ?>
			        </div>
			    </div>
			</div>
			<div class="progress-bg"><span class="color1"></span><span class="color2"></span><span class="color3"></span><span class="color4"></span></div>
		</section>
	<?php }
}

function optimus_svg_banner(){

	$banner_image_svg_code = get_field('banner_image_svg_code');
	$banner_h = get_field('banner_heading');
	if(empty($banner_h)){
		$banner_heading = get_the_title();
	}else{
		$banner_heading = $banner_h;
	}
	$banner_sub_heading = get_field('banner_sub_heading');
	$banner_button_text = get_field('banner_button_text');
	$banner_button_link = get_field('banner_button_link');
	$banner_link_text = get_field('banner_link_text');
	$banner_link = get_field('banner_link');
	if(empty($banner_image_svg_code)){
		$no_service_tail_svg_cls  = "no_service_tail_svg ";
	} else {
		$no_service_tail_svg_cls  = "";
	}
?>
<div class="service-tail-main flex flex-vcenter row-reverse <?php echo $no_service_tail_svg_cls; ?>">
<?php if(!empty($banner_image_svg_code)) { ?>
	<div class="service-tail-rt">
		<?php echo $banner_image_svg_code; ?>  
	</div>
<?php } ?>
	<div class="service-tail-text">
	    <div class="services-tail-decor absolute">
			<svg class="hide-tablet hide-mobile" width="1678" height="960" viewBox="0 0 1678 960" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M752.447 480C752.447 330.993 632.01 210.19 483.455 210.19C334.899 210.19 214.462 330.993 214.462 480C214.462 629.007 334.899 749.81 483.455 749.81C632.01 749.81 752.447 629.007 752.447 480ZM962 480C962 745.037 747.689 960 483.368 960C219.048 960 4.82269 745.037 4.82269 480C4.82269 214.963 219.134 0 483.368 0C747.602 0 961.914 214.963 961.914 480" fill="#19234C"/>
				<path d="M1256 0H962L1288 480L962 960H1256L1582 480L1256 0Z" fill="#19234C"/>
			</svg>
			<svg class="hide-desktop" width="428" height="260" viewBox="0 0 428 260" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M202.906 130C202.906 89.6438 170.287 56.9264 130.053 56.9264C89.8195 56.9264 57.2013 89.6438 57.2013 130C57.2013 170.356 89.8195 203.074 130.053 203.074C170.287 203.074 202.906 170.356 202.906 130ZM259.659 130C259.659 201.781 201.617 260 130.03 260C58.4432 260 0.42392 201.781 0.42392 130C0.42392 58.2191 58.4666 -9.53674e-06 130.03 -9.53674e-06C201.593 -9.53674e-06 259.636 58.2191 259.636 130" fill="#19234C"/>
				<path d="M339.284 0H259.659L347.951 130L259.659 260H339.284L427.576 130L339.284 0Z" fill="#19234C"/>
			</svg>   
	    </div>
	<?php if(!empty($banner_sub_heading)) { ?>
	    <span class="optional-text light-blue"><?php echo $banner_sub_heading; ?></span>
	<?php } ?>
	
	    <h1><?php echo $banner_heading; ?></h1>
	
	<?php if(!empty($banner_button_text || $banner_link_text )) { ?>
	    <div class="service-tail-btns flex flex-vcenter">
	    <?php if(!empty($banner_button_text && $banner_button_link)) { ?>
	        <a href="<?php echo $banner_button_link; ?>" class="button btn-transparent"><?php echo $banner_button_text; ?></a>
	    <?php } ?>
	    <?php if(!empty($banner_link_text && $banner_link)) { ?>
	        <a href="<?php echo $banner_link; ?>" class="text-link white inline-flex f-600"><?php echo $banner_link_text; ?> <i class="transition-3 fa-light fa-sharp fa-arrow-right"></i></a>
	    <?php } ?>
	    </div>
	<?php } ?>
	</div>
</div>
<?php }

function get_optimus_about_sub_banner(){

		global $post;
		$banner_image_2x = get_field('banner_desktop_image');
		$banner_image_m_2x = get_field('banner_mobile_image');
		$banner_image_mobile_2x = $banner_image_m_2x ? $banner_image_m_2x : $banner_image_2x;
		$banner_sub_h = get_field('banner_sub_heading');
		if(empty($banner_sub_h)){
			$banner_sub_heading = get_the_title( $post->post_parent );
		} else {
			$banner_sub_heading = $banner_sub_h;
		}
		$banner_h = get_field('banner_heading');
		if(empty($banner_h)){
			$banner_heading = get_the_title();
		} else {
			$banner_heading = $banner_h;
		}
		$banner_description = get_field('banner_description');
		if(empty($banner_image_2x)){
			$no_banner_img_cls = "no_banner_image";
		} else {
			$no_banner_img_cls = "";
		}
		$banner_button_text = get_field('banner_button_text');
		$banner_button_link = get_field('banner_button_link');
		$banner_link_text = get_field('banner_link_text');
		$banner_link = get_field('banner_link');

	if(!empty($banner_image_2x || $banner_heading)){ ?>
	<section class="banner-section relative o-hidden">
	    <div class="banner-wrap">
	        <div class="banner-main flex no-wrap relative <?php echo $no_banner_img_cls; ?>"><!-- if no banner image add this no_banner_image -->
	        <?php if(!empty($banner_image_2x)){ ?>
	            <div class="banner-image relative">
	                <div class="banner-pointer absolute"></div>
	                <div class="banner-chevron absolute"></div>
	                <picture class="banner-thumb object-fit">
	                    <source srcset="<?php echo $banner_image_2x['url']; ?>" media="(min-width: 1024px)">
	                    <img src="<?php echo $banner_image_mobile_2x['url']; ?>" alt="<?php echo $banner_image_2x['alt']; ?>">
	                </picture>
	            </div>
	       	<?php } ?>
	            <div class="banner-text inverted flex flex-vcenter relative">
	                <div class="banner-desc fs-20">
	                    <div class="banner-circle absolute">
	                        <svg class="hide-tablet hide-mobile" width="639" height="640" viewBox="0 0 639 640" fill="none">
	                            <path d="M498.416 320C498.416 220.662 418.125 140.127 319.088 140.127C220.051 140.127 139.76 220.662 139.76 320C139.76 419.338 220.051 499.873 319.088 499.873C418.125 499.873 498.416 419.338 498.416 320ZM638.118 320C638.118 496.691 495.244 640 319.03 640C142.817 640 0 496.691 0 320C0 143.309 142.874 0 319.03 0C495.186 0 638.061 143.309 638.061 320" fill="#004C97"/>
	                        </svg>
	                        <svg class="hide-mobile hide-desktop" width="484" height="485" viewBox="0 0 484 485" fill="none">
	                            <path d="M377.727 242.331C377.727 167.104 316.878 106.116 241.822 106.116C166.766 106.116 105.917 167.104 105.917 242.331C105.917 317.559 166.766 378.547 241.822 378.547C316.878 378.547 377.727 317.559 377.727 242.331ZM483.6 242.331C483.6 376.137 375.322 484.663 241.778 484.663C108.234 484.663 0 376.137 0 242.331C0 108.526 108.278 0 241.778 0C375.279 0 483.556 108.526 483.556 242.331" fill="url(#paint0_linear_2095_20080)"/>
	                            <defs>
	                                <linearGradient id="paint0_linear_2095_20080" x1="241.8" y1="0" x2="241.8" y2="484.663" gradientUnits="userSpaceOnUse">
	                                <stop stop-color="#004C97" stop-opacity="0"/>
	                                <stop offset="1" stop-color="#004C97"/>
	                                </linearGradient>
	                            </defs>
	                            </svg>
	                            <svg class="hide-tablet hide-desktop" width="254" height="254" viewBox="0 0 254 254" fill="none">
	                            <path d="M198.002 127.029C198.002 87.5948 166.105 55.6252 126.761 55.6252C87.4177 55.6252 55.5211 87.5948 55.5211 127.029C55.5211 166.462 87.4177 198.432 126.761 198.432C166.105 198.432 198.002 166.462 198.002 127.029ZM253.5 127.029C253.5 197.169 196.741 254.057 126.739 254.057C56.7356 254.057 0 197.169 0 127.029C0 56.8884 56.7585 0 126.739 0C196.719 0 253.477 56.8884 253.477 127.029" fill="url(#paint0_linear_2095_20082)"/>
	                            <defs>
	                                <linearGradient id="paint0_linear_2095_20082" x1="126.75" y1="0" x2="126.75" y2="254.057" gradientUnits="userSpaceOnUse">
	                                <stop stop-color="#004C97" stop-opacity="0"/>
	                                <stop offset="1" stop-color="#004C97"/>
	                                </linearGradient>
	                            </defs>
	                            </svg>
	                    </div>
	                        <span class="optional-text light-blue"><?php echo $banner_sub_heading; ?></span>
	                        <h1><?php echo $banner_heading; ?></h1>
	                        <?php echo $banner_description; ?>
	                <?php if(!empty($banner_button_text || $banner_link_text)){ ?>
	                    <div class="banner-btns flex flex-vcenter">
	                   	<?php if(!empty($banner_button_text && $banner_button_link)){ ?>
                            <a href="<?php echo $banner_button_link; ?>" class="button btn-transparent"><?php echo $banner_button_text; ?></a>
                       	<?php } ?>
                       	<?php if(!empty($banner_link_text && $banner_link)){ ?>
                            <a href="<?php echo $banner_link; ?>" class="text-link white inline-flex f-600"><?php echo $banner_link_text; ?> <i class="transition-3 fa-light fa-sharp fa-arrow-right" aria-hidden="true"></i></a>
                        <?php } ?>
                        </div>
                    <?php } ?>
	                </div>
	            </div>
	        </div>
	    </div>
	    </section>
	<?php }
}

function optimus_cta_module(){

	$cta_module_display = get_field('cta_module_display');
if($cta_module_display != 'no'){
	$cta_module_image = get_field('cta_module_image');
	//$cta_module_image_t = get_field('cta_module_image_tablet');
	$cta_module_image_m = get_field('cta_module_image_mobile');
	$cta_module_sub_heading = get_field('cta_module_sub_heading');
	$cta_module_heading = get_field('cta_module_heading');
	$cta_module_description = get_field('cta_module_description');
	$cta_module_button_text = get_field('cta_module_button_text');
	$cta_module_button_link = get_field('cta_module_button_link');
	// if(empty($cta_module_image_t)){
	// 	$cta_module_image_tablet = $cta_module_image;
	// } else {
	// 	$cta_module_image_tablet = $cta_module_image_t;
	// }
	if(empty($cta_module_image_m)){
		$cta_module_image_mobile = $cta_module_image;
	} else {
		$cta_module_image_mobile = $cta_module_image_m;
	}
	if(empty($cta_module_image)){
		$no_cta_img_cls = "no_primary_cta_image";
	} else {
		$no_cta_img_cls = "";
	}
	if (is_page_template('templates/industries.php') || is_page_template('templates/industries-detail.php')) {
		$section_class = "white-bg";
    }else{
		$section_class= "";
	}

if(!empty($cta_module_image || $cta_module_heading || $cta_module_description)){ ?>
<section class="primary-cta-section <?php echo $section_class; ?>" id="cta-section">
<div class="container">
		<?php if (is_single()) { ?>
			<hr>
		<?php } ?>
    <div class="primary-cta-wrap">
        <div class="primary-cta-main relative">
            <div class="primary-cta-bracket left absolute radius-24"></div>
            <div class="primary-cta-row flex radius-16 relative o-hidden <?php echo $no_cta_img_cls; ?>">
                <div class="primary-cta-text inverted fs-20 f-300 relative">
                    <div class="primary-cta-circle hide-tablet hide-mobile absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" width="499" height="500" viewBox="0 0 499 500" fill="none">
                            <path d="M389.755 250C389.755 172.392 326.968 109.474 249.523 109.474C172.077 109.474 109.29 172.392 109.29 250C109.29 327.608 172.077 390.526 249.523 390.526C326.968 390.526 389.755 327.608 389.755 250ZM499 250C499 388.04 387.274 500 249.477 500C111.681 500 0 388.04 0 250C0 111.96 111.726 3.05176e-05 249.477 3.05176e-05C387.229 3.05176e-05 498.955 111.96 498.955 250" fill="#004C97"/>
                          </svg>
                    </div>
                    <?php if(!empty($cta_module_sub_heading)) { ?>
                        <span class="optional-text light-blue"><?php echo $cta_module_sub_heading; ?></span>
                    <?php } ?>
                    <?php if(!empty($cta_module_heading)) { ?>
                        <h2><?php echo $cta_module_heading; ?></h2>
                    <?php } ?>
                    <?php echo $cta_module_description; ?>
                        
                    <?php if(!empty($cta_module_button_text && $cta_module_button_link )) { ?>
                        <div class="primary-cta-btns">
                            <a href="<?php echo $cta_module_button_link; ?>" class="text-btn-link inline-flex f-600"><span><?php echo $cta_module_button_text; ?></span><svg xmlns="http://www.w3.org/2000/svg" width="29" height="53" viewBox="0 0 29 53" fill="none"> <path d="M0 0.800049H10.3162L28.2194 26.6446L10.1845 52.8H0L17.4751 26.8L0 0.800049Z" fill="#F17C23"></path></svg></a>
                        </div>
                    <?php } ?>
                </div>
                <?php if(!empty($cta_module_image)) { ?>
                <div class="primary-cta-image relative">
                    <div class="primary-cta-pointer absolute"></div>
                    <div class="primary-cta-chevron absolute"></div>
                    <picture class="primary-cta-thumb object-fit">
                        <source srcset="<?php echo $cta_module_image['url']; ?>" media="(min-width: 744px)">
                  
                    <?php if(!empty($cta_module_image_mobile)) { ?>
                        <img src="<?php echo $cta_module_image_mobile['url']; ?>" alt="<?php echo $cta_module_image_mobile['alt']; ?>">
                    <?php } ?>
                    </picture>
                </div>
                <?php } ?>
            </div>
            <div class="primary-cta-bracket right absolute radius-24"></div>
        </div>
    </div>
</div>
</section>
<?php } } }

function optimus_page_insights(){
    
    global $post;
	$service_insights_heading = get_field('service_insights_heading');

	if(empty($service_insights_heading)){
		$no_post_array_heading = "no_post_array_heading";
	}else{
		$no_post_array_heading = "";
	}
	$select_service_insights = get_field('select_service_insights');
	if(!empty($select_service_insights)){
		$select_service_insights_post = $select_service_insights;
	} else {
		if (is_page_template('templates/industries.php')) { 
			$common_insights_recent_args = get_posts(array(
				'post_type' => 'post',
				'category__in'   => array(4, 11, 15, 7, 28, 27, 29),
				'numberposts' => 4,
			));
		 } else if (is_page_template('templates/services.php')) { 
			$common_insights_recent_args = get_posts(array(
				'post_type' => 'post',
				'category'  => 3,
				'numberposts' => 4,
			));
		 }
		 else if (is_page_template('templates/about.php') || is_page_template('templates/our-culture.php') || is_page_template('templates/our-people.php') || is_page_template('templates/home.php') ) { 
			$common_insights_recent_args = get_posts(array(
				'post_type' => 'post',
				'category'  => 6,
				'numberposts' => 4,
			));
		 }else if (is_page_template('templates/services-detail.php')) { 
			$common_insights_recent_args = get_posts(array(
				'post_type' => 'post',
				'numberposts' => 4,
				'orderby' => 'date',
				'order'   => 'DESC',
				'meta_query' => array(
					array(
						'key' => 'select_related_services',
						'value' => '"' . $post->ID . '"',
						'compare' => 'LIKE'
					)
				)
			));
		 }
		 
		 else{
			$common_insights_recent_args = get_posts(array(
				'post_type' => 'post',
				'category'  => 2,
				'numberposts' => 4,
			));
		 }
		
		$select_service_insights_post = $common_insights_recent_args;
	}
	if (is_page_template('templates/services.php')) {
		if(empty($cta_module_image && $cta_module_heading && $cta_module_description)){
			$no_ct_cls = "no_cta_top";
		} else {
			$no_ct_cls = "";
		}
	}
	if (is_page_template('templates/marketing-lp.php')) {
		$section_color_class = "light-blue-bg";
	}else if (is_page_template('templates/about.php')) { 
		$section_color_class = "post-color";
	}
	else{
		$section_color_class = "white-bg";
	}

if($select_service_insights_post){
?>
<section class="post-array-section <?php echo $section_color_class; ?> <?php echo $no_ct_cls; ?>">
    <div class="container">
        <div class="post-array-main">
        <div class="post-array-head flex <?php echo $no_post_array_heading; ?> ">
        <?php if(!empty($service_insights_heading)){ ?>
            <div class="post-array-title">
                <h2><?php echo $service_insights_heading; ?></h2>
            </div>
        <?php } ?>
            <div class="post-array-btn hide-mobile flex flex-vcenter">
			<?php if (is_page_template('templates/about.php') || is_page_template('templates/our-culture.php') || is_page_template('templates/our-people.php')) { ?>
				<a href="<?php echo get_category_link(2); ?>type/company-news/" class="text-link inline-flex f-600">More company news<i class="transition-3 fa-light fa-sharp fa-arrow-right"></i></a>
			<?php } else if(is_page_template('templates/home.php')) { ?>
				<a href="<?php echo get_category_link(2); ?>type/company-news/" class="text-link inline-flex f-600">More insights<i class="transition-3 fa-light fa-sharp fa-arrow-right"></i></a>
			<?php }	else if (is_page_template('templates/services-detail.php') || is_page_template('templates/services-detail-sub-page.php')) { ?>
				<a href="<?php echo get_category_link(2); ?>?service=<?php echo $post->ID; ?>" class="text-link inline-flex f-600">More insights<i class="transition-3 fa-light fa-sharp fa-arrow-right"></i></a>
			<?php } else { ?>
				<a href="<?php echo get_category_link(2); ?>" class="text-link inline-flex f-600">More insights<i class="transition-3 fa-light fa-sharp fa-arrow-right"></i></a>
            <?php } ?>
			</div>
        </div>
        <div class="post-array-pos relative">
            <div class="post-array-bg blue-bg absolute"></div>
            <div class="post-array-row flex">
            <?php foreach ( $select_service_insights_post as $post ) {
	            $select_service_insights_thumb = get_the_post_thumbnail_url($post->ID,'');
	            if(empty($select_service_insights_thumb)){//Default from news&event
	                $select_service_insights_default_thumb = get_field('default_thumbnail_image','category_2');
	                $select_service_insights_thumbnail         = $select_service_insights_default_thumb['url'];
	            } else {
	            	$select_service_insights_thumbnail = $select_service_insights_thumb;
	            }
	            $insight_short_description = get_field('insight_short_description', $post->ID);
	            $ideascategories = get_the_category($post->ID);
            ?>
            <div class="post-array-list">
				<div class="post-array-card radius-24 relative">
                <?php if(!empty($select_service_insights_thumbnail)){ ?>
                    <div class="post-array-image">
                        <picture class="post-array-thumb object-fit">
                            <source srcset="<?php echo $select_service_insights_thumbnail;?>" media="(min-width: 744px)">
                            <img src="<?php echo $select_service_insights_thumbnail;?>" alt="post-thumbnail">
                        </picture>
                    </div>
                <?php } ?>
                    <div class="post-array-text post-array-padd inverted relative">
						<div class="post-array-cat-main">
							<?php
								if( $ideascategories ):
									$resultstr = array();
									foreach( $ideascategories as $breadcrumb_category ):
									$exclude_breadcrumb_arr = array(1,2);
									if(!in_array($breadcrumb_category->term_id,$exclude_breadcrumb_arr)){
										$breadcrumb_cat_title = $breadcrumb_category->name;
										$breadcrumb_catid = $breadcrumb_category->term_id;
										$category_icon_type = get_field('category_icon_type', 'category_'.$breadcrumb_catid);
											if($category_icon_type == 'font-awesome'){
												$category_icon_class = get_field('category_icon_class', 'category_'.$breadcrumb_catid);
												$category_icon_class_color = get_field('category_icon_class_color', 'category_'.$breadcrumb_catid);
												if(!empty($category_icon_class)){
												$resultstr[] = '<div class="post-array-cat flex flex-vcenter"><div class="post-array-icon"><i class="'.$category_icon_class.'" style="color:'.$category_icon_class_color.'"></i></div>
												<span class="fs-15"><a href="'.get_category_link($breadcrumb_catid).'">'.$breadcrumb_cat_title.'</a></span>
												</div>';
											} else {
												$resultstr[] = '<div class="post-array-cat flex flex-vcenter">
												<span class="fs-15"><a href="'.get_category_link($breadcrumb_catid).'">'.$breadcrumb_cat_title.'</a></span>
												</div>';
											} } else if($category_icon_type == 'icon'){
												$category_icon = get_field('category_icon', 'category_'.$breadcrumb_catid);
												$category_icon_url = $category_icon['url'];
												if(!empty($category_icon)){
												$resultstr[] = '<div class="post-array-cat flex flex-vcenter">
												<div class="post-array-icon">
													<figure class="object-fit">
														<img src="'.$category_icon_url.'" alt="icon">
													</figure>
												</div>
												<span class="fs-15"><a href="'.get_category_link($breadcrumb_catid).'">'.$breadcrumb_cat_title.'</a></span>
												</div>';
											} else {
												$resultstr[] = '<div class="post-array-cat flex flex-vcenter">
												<span class="fs-15"><a href="'.get_category_link($breadcrumb_catid).'">'.$breadcrumb_cat_title.'</a></span>
												</div>';
											} } 
									} 
									endforeach;
									echo implode(" ",$resultstr);
								endif;
							?>
						</div>
                        <div class="post-array-blog">
                            <h2 class="h5"><a href="<?php echo get_the_permalink($post->ID); ?>"><?php echo get_the_title($post->ID); ?></a></h2>
                        </div>
                    </div>
                    <div class="post-array-hover post-array-padd">
						<div class="post-array-cat-main">
							<?php
								if( $ideascategories ):
									$resultstr = array();
									foreach( $ideascategories as $breadcrumb_category ):
									$exclude_breadcrumb_arr = array(1,2);
									if(!in_array($breadcrumb_category->term_id,$exclude_breadcrumb_arr)){
										$breadcrumb_cat_title = $breadcrumb_category->name;
										$breadcrumb_catid = $breadcrumb_category->term_id;
										$category_icon_type = get_field('category_icon_type', 'category_'.$breadcrumb_catid);
										if($category_icon_type == 'font-awesome'){
											$category_icon_class = get_field('category_icon_class', 'category_'.$breadcrumb_catid);
											$category_icon_class_color = get_field('category_icon_class_color', 'category_'.$breadcrumb_catid);
										
											$resultstr[] = '<div class="post-array-cat flex flex-vcenter">';
											if(!empty($category_icon_class)) {
												$resultstr[] = '<div class="post-array-icon">';
												$resultstr[] = '<i class="'.$category_icon_class.'" style="color:'.$category_icon_class_color.'"></i>';
												$resultstr[] = '</div>';
											}
											$resultstr[] = '<span class="fs-15"><a href="'.get_category_link($breadcrumb_catid).'">'.$breadcrumb_cat_title.'</a></span>';
											$resultstr[] = '</div>'; 
										
										} else {
											$category_icon = get_field('category_icon', 'category_'.$breadcrumb_catid);
											$category_icon_url = $category_icon['url'];
											$category_icon_hover = get_field('category_icon_hover', 'category_'.$breadcrumb_catid);
											$category_icon_h_url = $category_icon_hover['url'];
										
											if(empty($category_icon_h_url)){
												$category_icon_hover_url = $category_icon_url;
											}else{
												$category_icon_hover_url = $category_icon_h_url;
											}
										
											$resultstr[] = '<div class="post-array-cat flex flex-vcenter">';
											if (!empty($category_icon_url) || !empty($category_icon_hover_url)) {
												$resultstr[] = '<div class="post-array-icon relative">';
												if (!empty($category_icon_url)) {
													$resultstr[] = '<figure class="array-icon-normal object-fit-img">';
													$resultstr[] = '<img src="'.$category_icon_url.'" alt="icon">';
													$resultstr[] = '</figure>';
												}
												if (!empty($category_icon_hover_url)) {
													$resultstr[] = '<figure class="array-icon-hover object-fit-img">';
													$resultstr[] = '<img src="'.$category_icon_hover_url.'" alt="icon">';
													$resultstr[] = '</figure>';
												}
										
												$resultstr[] = '</div>'; 
											}
											$resultstr[] = '<span class="fs-15"><a href="'.get_category_link($breadcrumb_catid).'">'.$breadcrumb_cat_title.'</a></span>';
											$resultstr[] = '</div>'; 
										}
										
									} 
									endforeach;
									echo implode(" ",$resultstr);
								endif;
							?>
						</div>
                        <div class="post-array-blog">
                            <h2 class="h5"><a href="<?php echo get_the_permalink($post->ID); ?>"><?php echo get_the_title($post->ID); ?></a></h2>
                        </div>
                    <?php if(!empty($insight_short_description)){ ?>
                        <div class="post-array-desc">
                            <p><?php echo $insight_short_description; ?></p>
                            <a href="<?php echo get_the_permalink($post->ID); ?>" class="text-link navy inline-flex f-600" tabindex="-1"><?php echo do_shortcode('[rt_reading_time post_id="'.$post->ID.'"]'); ?>Minute Read<i class="transition-3 fa-light fa-sharp fa-arrow-right" aria-hidden="true"></i></a>
                        </div>
                    <?php } ?>
                    </div>
                </div>
					</div>
            <?php } wp_reset_postdata(); ?>        
            </div>
			<div class="post-array-appends flex"></div>   
        </div>
        <div class="post-array-mobile hide-tablet hide-desktop">
			<?php if (is_page_template('templates/about.php') || is_page_template('templates/our-culture.php') || is_page_template('templates/our-people.php') ) { ?>
				<a href="<?php echo get_category_link(2); ?>type/company-news/" class="button btn-transparent w-100">More company news</a>
			<?php } else if(is_page_template('templates/home.php')) { ?>
				<a href="<?php echo get_category_link(2); ?>type/company-news/" class="button btn-transparent w-100">More insights</a>
			<?php }	else if (is_page_template('templates/services-detail.php') || is_page_template('templates/services-detail-sub-page.php')) { ?>
				<a href="<?php echo get_category_link(2); ?>?service=<?php echo $post->ID; ?>" class="button btn-transparent w-100">More insights</a>
			<?php } else { ?>
				<a href="<?php echo get_category_link(2); ?>?filter=services" class="button btn-transparent w-100">More insights</a>
            <?php } ?>
        </div>
    </div>
</div>
</section>
<?php } }

function optimus_more_case_studies(){
	
	global $post;
		$cat = 2;
		$insight_cat = get_cat_name($cat);
		$catid = 17;
		$category = get_category($catid);
		$category_slug = $category->slug;
		$url = home_url('/' . $insight_cat . '/' . $category_slug. '/');
	$more_case_studies_heading = get_field('more_case_studies_heading');
	$select_more_case_studies = get_field('select_more_case_studies');
	if(!empty($select_more_case_studies)){
		$select_more_case_studies_posts = $select_more_case_studies;
	} else {
		$common_casestudies_recent_args = get_posts(array(
        'post_type' => 'post',
        'category'  => 17,
        'post__not_in'     => array($post->ID),  
        'numberposts' => 4,
    ));
		$select_more_case_studies_posts = $common_casestudies_recent_args;
	}
if($select_more_case_studies_posts){
?>
<section class="post-array-section">
    <div class="container">
        <div class="post-array-main">
        <div class="post-array-head flex ">
        <?php if(!empty($more_case_studies_heading)){ ?>
            <div class="post-array-title">
                <h2><?php echo $more_case_studies_heading; ?></h2>
            </div>
        <?php } ?>
            <div class="post-array-btn hide-mobile flex flex-vcenter">
                <a href="<?php echo esc_url($url); ?>" class="text-link inline-flex f-600">More case studies<i class="transition-3 fa-light fa-sharp fa-arrow-right"></i></a>
            </div>
        </div>
        <div class="post-array-pos relative">
            <div class="post-array-bg blue-bg absolute"></div>
            <div class="post-array-row flex">
            <?php foreach ( $select_more_case_studies_posts as $post ) {
	            $case_studies_post_thumb = get_the_post_thumbnail_url($post->ID,'');
	            if(empty($case_studies_post_thumb)){//Default from news&event
	                $case_studies_post_default_thumb = get_field('default_thumbnail_image','category_2');
	                $case_studies_thumbnail = $case_studies_post_default_thumb['url'];
	            } else {
	            	$case_studies_thumbnail = $case_studies_post_thumb;
	            }
	            $case_studies_short_description = get_field('insight_short_description', $post->ID);
	            $case_studies_ideascategories = get_the_category($post->ID);
            ?>
            <div class="post-array-list">
				<div class="post-array-card radius-24 relative">
                <?php if(!empty($case_studies_thumbnail)){ ?>
                    <div class="post-array-image">
                        <picture class="post-array-thumb object-fit">
                            <source srcset="<?php echo $case_studies_thumbnail;?>" media="(min-width: 744px)">
                            <img src="<?php echo $case_studies_thumbnail;?>" alt="post-thumbnail">
                        </picture>
                    </div>
                <?php } ?>
                    <div class="post-array-text post-array-padd inverted relative">
						<div class="post-array-cat-main">
							<?php
								if( $case_studies_ideascategories ):
									$resultstr = array();
									foreach( $case_studies_ideascategories as $breadcrumb_category ):
									$exclude_breadcrumb_arr = array(1,2);
									if(!in_array($breadcrumb_category->term_id,$exclude_breadcrumb_arr)){
										$breadcrumb_cat_title = $breadcrumb_category->name;
										$breadcrumb_catid = $breadcrumb_category->term_id;
										$category_icon_type = get_field('category_icon_type', 'category_'.$breadcrumb_catid);
											if($category_icon_type == 'font-awesome'){
												$category_icon_class = get_field('category_icon_class', 'category_'.$breadcrumb_catid);
												$category_icon_class_color = get_field('category_icon_class_color', 'category_'.$breadcrumb_catid);
												if(!empty($category_icon_class)){
												$resultstr[] = '<div class="post-array-cat flex flex-vcenter"><div class="post-array-icon"><i class="'.$category_icon_class.'" style="color:'.$category_icon_class_color.'"></i></div>
												<span class="fs-15">'.$breadcrumb_cat_title.'</span>
												</div>';
											} } else if($category_icon_type == 'icon'){
												$category_icon = get_field('category_icon', 'category_'.$breadcrumb_catid);
												$category_icon_url = $category_icon['url'];
												if(!empty($category_icon)){
												$resultstr[] = '<div class="post-array-cat flex flex-vcenter">
												<div class="post-array-icon">
													<figure class="object-fit">
														<img src="'.$category_icon_url.'" alt="icon">
													</figure>
												</div>
												<span class="fs-15">'.$breadcrumb_cat_title.'</span>
												</div>';
											} } else {
												$resultstr[] = '<div class="post-array-cat flex flex-vcenter">
												<span class="fs-15">'.$breadcrumb_cat_title.'</span>
												</div>';
											}
									} 
									endforeach;
									echo implode(" ",$resultstr);
								endif;
							?>
						</div>
                        <div class="post-array-blog">
                            <h2 class="h5"><a href="<?php echo get_the_permalink($post->ID); ?>"><?php echo get_the_title($post->ID); ?></a></h2>
                        </div>
                    </div>
                    <div class="post-array-hover post-array-padd">
						<div class="post-array-cat-main">
							<?php
								if( $case_studies_ideascategories ):
									$resultstr = array();
									foreach( $case_studies_ideascategories as $breadcrumb_category ):
									$exclude_breadcrumb_arr = array(1,2);
									if(!in_array($breadcrumb_category->term_id,$exclude_breadcrumb_arr)){
										$breadcrumb_cat_title = $breadcrumb_category->name;
										$breadcrumb_catid = $breadcrumb_category->term_id;
										$category_icon_type = get_field('category_icon_type', 'category_'.$breadcrumb_catid);
											if($category_icon_type == 'font-awesome'){
												$category_icon_class = get_field('category_icon_class', 'category_'.$breadcrumb_catid);
												$category_icon_class_color = get_field('category_icon_class_color', 'category_'.$breadcrumb_catid);
												if(!empty($category_icon_class)){
												$resultstr[] = '<div class="post-array-cat flex flex-vcenter"><div class="post-array-icon"><i class="'.$category_icon_class.'" style="color:'.$category_icon_class_color.'"></i></div>
												<span class="fs-15">'.$breadcrumb_cat_title.'</span>
												</div>';
											} } else {
												$category_icon = get_field('category_icon', 'category_'.$breadcrumb_catid);
												$category_icon_url = $category_icon['url'];
												if(!empty($category_icon)){
												$resultstr[] = '<div class="post-array-cat flex flex-vcenter">
												<div class="post-array-icon">
													<figure class="object-fit">
														<img src="'.$category_icon_url.'" alt="icon">
													</figure>
												</div>
												<span class="fs-15">'.$breadcrumb_cat_title.'</span>
												</div>';
											} }
									} 
									endforeach;
									echo implode(" ",$resultstr);
								endif;
							?>
						</div>
                        <div class="post-array-blog">
                            <h2 class="h5"><a href="<?php echo get_the_permalink($post->ID); ?>"><?php echo get_the_title($post->ID); ?></a></h2>
                        </div>
                    <?php if(!empty($case_studies_short_description)){ ?>
                        <div class="post-array-desc">
                            <p><?php echo $case_studies_short_description; ?></p>
                            <a href="<?php echo get_the_permalink($post->ID); ?>" class="text-link navy inline-flex f-600" tabindex="-1"><?php echo do_shortcode('[rt_reading_time post_id="'.$post->ID.'"]'); ?>Minute Read<i class="transition-3 fa-light fa-sharp fa-arrow-right" aria-hidden="true"></i></a>
                        </div>
                    <?php } ?>
                    </div>
                </div>
					</div>
            <?php } wp_reset_postdata(); ?>        
            </div>
			<div class="post-array-appends flex"></div>   
        </div>
        <div class="post-array-mobile hide-tablet hide-desktop">
            <a href="<?php echo esc_url($url); ?>" class="button btn-transparent w-100">More case studies</a>
        </div>
    </div>
</div>
</section>
<?php } }

function my_mce_buttons_2($buttons) {
/**
* Add in a core button that's disabled by default
*/
$buttons[] = 'superscript';
$buttons[] = 'subscript';
return $buttons;
}
add_filter('mce_buttons_2', 'my_mce_buttons_2');

add_action( 'admin_init', 'my_remove_admin_menus' );
function my_remove_admin_menus() {
    remove_menu_page( 'edit-comments.php' );
}

add_filter('acf/fields/relationship/query/name=home_select_industries', 'acf_home_industries_filter', 10,3);

function acf_home_industries_filter($args, $field, $post){
   $args['post_parent'] = 716;
   $args['post_status'] = 'publish';
   return $args;
}

add_filter('acf/fields/relationship/query/name=home_select_services', 'acf_home_services_filter', 10,3);

function acf_home_services_filter($args, $field, $post){
   $args['post_parent'] = 566;
   $args['post_status'] = 'publish';
   return $args;
}

add_filter('acf/fields/relationship/query/name=services_detail_data_analytics_select_service', 'acf_services_detail_filter', 10,3);

function acf_services_detail_filter($args, $field, $post){

	$parent_page_id = 566; // ID of the "Data" page

    // Fetch all subpages of the parent page
    $subpages_query = new WP_Query(array(
        'post_type' => 'page',
        'post_status' => 'publish',
        'post_parent' => $parent_page_id,
        'posts_per_page' => -1, // Fetch all
    ));

    $subpage_ids = wp_list_pluck($subpages_query->posts, 'ID');

    // Include the parent page ID
    $subpage_ids[] = $parent_page_id;

    // Fetch sub-subpages (children of the subpages)
    $subsubpages_query = new WP_Query(array(
        'post_type' => 'page',
        'post_status' => 'publish',
        'post_parent__in' => $subpage_ids,
        'posts_per_page' => -1, // Fetch all
    ));

    $subsubpage_ids = wp_list_pluck($subsubpages_query->posts, 'ID');

    // Merge IDs of subpages and sub-subpages
    $all_page_ids = array_merge($subpage_ids, $subsubpage_ids);

    // Include these IDs in the ACF query
    $args['post__in'] = $all_page_ids;

    return $args;
//    $args['post_parent'] = 566;
//    $args['depth'] = 3;
//    $args['post_status'] = 'publish';
   
//    return $args;
}

add_filter('acf/fields/relationship/query/name=footer_social_select', 'footer_social_select_filter', 10,3);

function footer_social_select_filter($args, $field, $post){
   $args['post_parent'] = 566;
   $args['post_status'] = 'publish';
   return $args;
}

add_filter('acf/fields/relationship/query/name=select_industries', 'acf_industries_landing_filter', 10,3);

function acf_industries_landing_filter($args, $field, $post){
   $args['post_parent'] = 716;
   $args['post_status'] = 'publish';
   return $args;
}

function get_banner(){ 
$banner_desktop_image 	= get_field('banner_desktop_image');
$banner_m_image 		= get_field('banner_mobile_image');
$banner_mobile_image 	= 	$banner_m_image ? $banner_m_image : $banner_desktop_image;
$banner_sub_heading 	= get_field('banner_sub_heading');
$banner_head 				= get_field('banner_heading');
if(empty($banner_head)){
	$banner_heading 	= get_the_title();
}else{
	$banner_heading 	= $banner_head;
}
$banner_description		= get_field('banner_description');
if(empty($banner_desktop_image)){
	$no_banner_image = "no_banner_image";
}	else{
	$no_banner_image = "";
}

?>
<section class="banner-section relative o-hidden">
	<div class="banner-wrap">
		<div class="banner-main flex no-wrap relative <?php echo $no_banner_image; ?>"><!-- if no banner image add this no_banner_image -->
			<?php if(!empty($banner_desktop_image)){ ?>
				<div class="banner-image relative">
					<div class="banner-pointer absolute"></div>
					<div class="banner-chevron absolute"></div>
					<picture class="banner-thumb object-fit">
						<source srcset="<?php echo $banner_desktop_image['url']; ?>" media="(min-width: 1024px)">
						<img src="<?php echo $banner_mobile_image['url']; ?>" alt="<?php echo $banner_mobile_image['alt']; ?>">
					</picture>
				</div>
			<?php } if(!empty($banner_sub_heading || $banner_heading || $banner_description)) {?>
				<div class="banner-text inverted flex flex-vcenter relative">
					<div class="banner-desc fs-20">
						<div class="banner-circle absolute">
							<svg class="hide-tablet hide-mobile" width="639" height="640" viewBox="0 0 639 640" fill="none">
								<path d="M498.416 320C498.416 220.662 418.125 140.127 319.088 140.127C220.051 140.127 139.76 220.662 139.76 320C139.76 419.338 220.051 499.873 319.088 499.873C418.125 499.873 498.416 419.338 498.416 320ZM638.118 320C638.118 496.691 495.244 640 319.03 640C142.817 640 0 496.691 0 320C0 143.309 142.874 0 319.03 0C495.186 0 638.061 143.309 638.061 320" fill="#004C97"/>
							</svg>
							<svg class="hide-mobile hide-desktop" width="484" height="485" viewBox="0 0 484 485" fill="none">
								<path d="M377.727 242.331C377.727 167.104 316.878 106.116 241.822 106.116C166.766 106.116 105.917 167.104 105.917 242.331C105.917 317.559 166.766 378.547 241.822 378.547C316.878 378.547 377.727 317.559 377.727 242.331ZM483.6 242.331C483.6 376.137 375.322 484.663 241.778 484.663C108.234 484.663 0 376.137 0 242.331C0 108.526 108.278 0 241.778 0C375.279 0 483.556 108.526 483.556 242.331" fill="url(#paint0_linear_2095_20080)"/>
								<defs>
								<linearGradient id="paint0_linear_2095_20080" x1="241.8" y1="0" x2="241.8" y2="484.663" gradientUnits="userSpaceOnUse">
									<stop stop-color="#004C97" stop-opacity="0"/>
									<stop offset="1" stop-color="#004C97"/>
								</linearGradient>
								</defs>
							</svg>
							<svg class="hide-tablet hide-desktop" width="254" height="254" viewBox="0 0 254 254" fill="none">
								<path d="M198.002 127.029C198.002 87.5948 166.105 55.6252 126.761 55.6252C87.4177 55.6252 55.5211 87.5948 55.5211 127.029C55.5211 166.462 87.4177 198.432 126.761 198.432C166.105 198.432 198.002 166.462 198.002 127.029ZM253.5 127.029C253.5 197.169 196.741 254.057 126.739 254.057C56.7356 254.057 0 197.169 0 127.029C0 56.8884 56.7585 0 126.739 0C196.719 0 253.477 56.8884 253.477 127.029" fill="url(#paint0_linear_2095_20082)"/>
								<defs>
								<linearGradient id="paint0_linear_2095_20082" x1="126.75" y1="0" x2="126.75" y2="254.057" gradientUnits="userSpaceOnUse">
									<stop stop-color="#004C97" stop-opacity="0"/>
									<stop offset="1" stop-color="#004C97"/>
								</linearGradient>
								</defs>
							</svg>
						</div>
						<?php if(!empty($banner_sub_heading)){ ?>
							<span class="optional-text light-blue"><?php echo $banner_sub_heading; ?></span>
						<?php } if(!empty($banner_heading)){ ?>
							<h1><?php echo $banner_heading; ?></h1>
						<?php } 
								echo $banner_description;
						?>	
					</div>
				</div>
			<?php } ?>
		</div>
	</div>
	</section>
<?php }

function shortcode_image_with_caption( $atts = array() ) {

	$default_img_caption_desktop_img = get_field('default_img_caption_desktop_img');
	$default_img_caption_m_img = get_field('default_img_caption_mobile_img');
	$default_img_caption_mobile_img = $default_img_caption_m_img ? $default_img_caption_m_img : $default_img_caption_desktop_img;
	$default_img_caption = get_field('default_img_caption');
	if(!empty($default_img_caption_desktop_img)){
		$img_caption_short_code = '<div class="default-image-caption">';
            $img_caption_short_code .= '<picture class="caption-thumb object-fit-img radius-img-24">';
                $img_caption_short_code .= '<source srcset="'.$default_img_caption_desktop_img['url'].'" media="(min-width: 744px)">';
                $img_caption_short_code .= '<img src="'.$default_img_caption_mobile_img['url'].'" alt="'.$default_img_caption_desktop_img['alt'].'">';
            $img_caption_short_code .= '</picture>';
        if(!empty($default_img_caption)){
            $img_caption_short_code .= '<div class="default-caption fs-14">';
                $img_caption_short_code .= '<div class="caption-desc">';
                    $img_caption_short_code .= '<p>'.$default_img_caption.'</p>';
                $img_caption_short_code .= '</div>';
            $img_caption_short_code .= '</div>';
        }
        $img_caption_short_code .= '</div>';
    }

    return $img_caption_short_code;
}

add_shortcode('imagewithcaption', 'shortcode_image_with_caption');

function shortcode_testimonial( $atts = array() ) {

	$case_study_testimonial_description = get_field('case_study_testimonial_description');
	$case_study_testimonial_image = get_field('case_study_testimonial_image');
	$case_study_testimonial_name = get_field('case_study_testimonial_name');
	$case_study_testimonial_position = get_field('case_study_testimonial_position');
	if(!empty($case_study_testimonial_name || $case_study_testimonial_description)){
        $testimonial_short_code = '<div class="insights-post-block">';
            $testimonial_short_code .= '<div class="insights-post-wrap relative">';
                $testimonial_short_code .= '<div class="insights-post-bracket left absolute radius-24"></div>';
                $testimonial_short_code .= '<div class="insights-block-main">';
                    $testimonial_short_code .= '<div class="insights-block-icon">';
                        $testimonial_short_code .= '<i class="fa-sharp fa-thin fa-message"></i>';
                    $testimonial_short_code .= '</div>';
                if(!empty($case_study_testimonial_description)){
                    $testimonial_short_code .= '<span>'.$case_study_testimonial_description.'</span>';
                }
                    $testimonial_short_code .= '<div class="insights-block-list flex flex-vcenter">';
                    if(!empty($case_study_testimonial_image)){
                        $testimonial_short_code .= '<div class="insights-block-img">';
                            $testimonial_short_code .= '<figure class="object-fit-img radius-img-50">';
                                $testimonial_short_code .= '<img src="'.$case_study_testimonial_image['url'].'" alt="'.$case_study_testimonial_image['alt'].'">';
                            $testimonial_short_code .= '</figure>';
                        $testimonial_short_code .= '</div>';
                    }
                    if(!empty($case_study_testimonial_name || $case_study_testimonial_position)){
                        $testimonial_short_code .= '<div class="insights-block-info fs-16">';
                       	if(!empty($case_study_testimonial_name)){
                            $testimonial_short_code .= '<span class="h6">'.$case_study_testimonial_name.'</span>';
                        }
                        if(!empty($case_study_testimonial_position)){
                            $testimonial_short_code .= '<p>'.$case_study_testimonial_position.'</p>';
                        }
                        $testimonial_short_code .= '</div>';
                    }
                    $testimonial_short_code .= '</div>';
                $testimonial_short_code .= '</div>';
                $testimonial_short_code .= '<div class="insights-post-bracket right absolute radius-24"></div>';
            $testimonial_short_code .= '</div>';
        $testimonial_short_code .= '</div>';
    }

    return $testimonial_short_code;
}

add_shortcode('testimonial', 'shortcode_testimonial');

function shortcode_blockquote( $atts = array() ) {

	$default_page_blockquote_text = get_field('default_page_blockquote_text');
	$default_page_blockquote_link = get_field('default_page_blockquote_link');
	if(!empty($default_page_blockquote_text)){
		$default_blockquote_short_code = '<div class="default-line-wrap">';
            $default_blockquote_short_code .= '<div class="default-line-in flex flex-vcenter fs-24">';
        $default_blockquote_short_code .= '<div class="default-line-text">';
        if(!empty($default_page_blockquote_link)){
        	$default_blockquote_short_code .= '<a href="'.$default_page_blockquote_link.'">';
        }
            $default_blockquote_short_code .= '<p>'.$default_page_blockquote_text.'</p>';
        if(!empty($default_page_blockquote_link)){
        	$default_blockquote_short_code .= '</a>';
        }
        $default_blockquote_short_code .= '</div>';
        $default_blockquote_short_code .= '<div class="default-line-arrow flex">';
            $default_blockquote_short_code .= '<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.4387 24.0503C37.4387 31.5007 31.4076 37.5408 23.9684 37.5408C16.5292 37.5408 10.4981 31.5007 10.4981 24.0503C10.4981 16.5999 16.5292 10.5598 23.9684 10.5598C31.4076 10.5598 37.4387 16.5999 37.4387 24.0503ZM47.9324 24.0503C47.9324 10.7984 37.2004 0.050293 23.964 0.050293C10.7277 0.050293 0 10.7984 0 24.0503C0 37.3021 10.732 48.0503 23.964 48.0503C37.196 48.0503 47.9281 37.3021 47.9281 24.0503" fill="#F17C23"/>';
              $default_blockquote_short_code .= '</svg>';
            $default_blockquote_short_code .= '<svg width="30" height="49" viewBox="0 0 30 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.933594 0.050293H13.4562L29.9822 23.9068L13.3346 48.0503H0.933594L17.0645 24.0503L0.933594 0.050293Z" fill="#F17C23"/>
            </svg>';
        $default_blockquote_short_code .= '</div>';
        $default_blockquote_short_code .= '</div>';
        $default_blockquote_short_code .= '</div>';
    }

    return $default_blockquote_short_code;
}

add_shortcode('insight', 'shortcode_blockquote');

function shortcode_blockquote_one( $atts = array() ) {

	if (is_page_template('templates/services-detail.php')) {
		$service_detail_blockquote_one_text = get_field('service_detail_blockquote_one_text');
		$service_detail_blockquote_one_link = get_field('service_detail_blockquote_one_link');
		if(!empty($service_detail_blockquote_one_text)){
			$blockquote_one_shortcode = '<div class="sub-detail-line-wrap">';
                $blockquote_one_shortcode .= '<div class="default-line-in flex flex-vcenter fs-24">';
                  $blockquote_one_shortcode .= '<div class="default-line-text">';
                $blockquote_one_shortcode .= '<p>';
                if(!empty($service_detail_blockquote_one_link)){
                    $blockquote_one_shortcode .= '<a href="'.$service_detail_blockquote_one_link.'">';
                }
                $blockquote_one_shortcode .= ''.$service_detail_blockquote_one_text.'';
                if(!empty($service_detail_blockquote_one_link)){
                    $blockquote_one_shortcode .= '</a>';
                }
                $blockquote_one_shortcode .= '</p>';
                  $blockquote_one_shortcode .= '</div>';
                  $blockquote_one_shortcode .= '<div class="default-line-arrow flex">
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <path d="M37.4387 24.0503C37.4387 31.5007 31.4076 37.5408 23.9684 37.5408C16.5292 37.5408 10.4981 31.5007 10.4981 24.0503C10.4981 16.5999 16.5292 10.5598 23.9684 10.5598C31.4076 10.5598 37.4387 16.5999 37.4387 24.0503ZM47.9324 24.0503C47.9324 10.7984 37.2004 0.050293 23.964 0.050293C10.7277 0.050293 0 10.7984 0 24.0503C0 37.3021 10.732 48.0503 23.964 48.0503C37.196 48.0503 47.9281 37.3021 47.9281 24.0503" fill="#F17C23" ></path>
                    </svg>
                    <svg width="30" height="49" viewBox="0 0 30 49" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <path d="M0.933594 0.050293H13.4562L29.9822 23.9068L13.3346 48.0503H0.933594L17.0645 24.0503L0.933594 0.050293Z" fill="#F17C23" ></path>
                    </svg>';
                  $blockquote_one_shortcode .= '</div>';
                $blockquote_one_shortcode .= '</div>';
            $blockquote_one_shortcode .= '</div>';
            $blockquote_one_shortcode .= '<div class="fluid-container relative">
                <div class="container md">
                    <hr class="blue-line">
                </div>
            </div>';
	    }
	} else if (is_page_template('templates/industries-detail.php')) {
		$industry_detail_blockquote_one_text = get_field('industry_detail_blockquote_one_text');
		$industry_detail_blockquote_one_link = get_field('industry_detail_blockquote_one_link');
		if(!empty($industry_detail_blockquote_one_text)){
			$blockquote_one_shortcode = '<div class="sub-detail-line-wrap">';
                $blockquote_one_shortcode .= '<div class="default-line-in flex flex-vcenter fs-24">';
                  $blockquote_one_shortcode .= '<div class="default-line-text">';
                $blockquote_one_shortcode .= '<p>';
                if(!empty($industry_detail_blockquote_one_link)){
                    $blockquote_one_shortcode .= '<a href="'.$industry_detail_blockquote_one_link.'">';
                }
                $blockquote_one_shortcode .= ''.$industry_detail_blockquote_one_text.'';
                if(!empty($industry_detail_blockquote_one_link)){
                    $blockquote_one_shortcode .= '</a>';
                }
                $blockquote_one_shortcode .= '</p>';
                  $blockquote_one_shortcode .= '</div>';
                  $blockquote_one_shortcode .= '<div class="default-line-arrow flex">
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <path d="M37.4387 24.0503C37.4387 31.5007 31.4076 37.5408 23.9684 37.5408C16.5292 37.5408 10.4981 31.5007 10.4981 24.0503C10.4981 16.5999 16.5292 10.5598 23.9684 10.5598C31.4076 10.5598 37.4387 16.5999 37.4387 24.0503ZM47.9324 24.0503C47.9324 10.7984 37.2004 0.050293 23.964 0.050293C10.7277 0.050293 0 10.7984 0 24.0503C0 37.3021 10.732 48.0503 23.964 48.0503C37.196 48.0503 47.9281 37.3021 47.9281 24.0503" fill="#F17C23" ></path>
                    </svg>
                    <svg width="30" height="49" viewBox="0 0 30 49" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <path d="M0.933594 0.050293H13.4562L29.9822 23.9068L13.3346 48.0503H0.933594L17.0645 24.0503L0.933594 0.050293Z" fill="#F17C23" ></path>
                    </svg>';
                  $blockquote_one_shortcode .= '</div>';
                $blockquote_one_shortcode .= '</div>';
            $blockquote_one_shortcode .= '</div>';
            $blockquote_one_shortcode .= '<div class="fluid-container relative">
                <div class="container md">
                    <hr class="blue-line">
                </div>
            </div>';
	    }
	} 
	
	
	else {
		$case_study_blockquote_one_text = get_field('case_study_blockquote_one_text');
		$case_study_blockquote_one_link = get_field('case_study_blockquote_one_link');
		if(!empty($case_study_blockquote_one_text)){
			$blockquote_one_shortcode = '<div class="case-study-data-block">';
	        $blockquote_one_shortcode .= '<div class="case-study-data-wrap relative">';
	        $blockquote_one_shortcode .= '<div class="case-study-data-bracket left absolute radius-24"></div>';
	        $blockquote_one_shortcode .= '<div class="case-study-data-main flex flex-vcenter">';
	        $blockquote_one_shortcode .= '<div class="case-study-icon flex">';
	       	if(in_category(17)){
		        $blockquote_one_shortcode .= '<svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
	              <path d="M43.6784 28.3003C43.6784 36.9924 36.6422 44.0392 27.9631 44.0392C19.284 44.0392 12.2478 36.9924 12.2478 28.3003C12.2478 19.6082 19.284 12.5614 27.9631 12.5614C36.6422 12.5614 43.6784 19.6082 43.6784 28.3003ZM55.9212 28.3003C55.9212 12.8398 43.4004 0.300293 27.958 0.300293C12.5157 0.300293 0 12.8398 0 28.3003C0 43.7608 12.5207 56.3003 27.958 56.3003C43.3954 56.3003 55.9161 43.7608 55.9161 28.3003" fill="#F17C23"/>
	            </svg>
		        <svg width="35" height="57" viewBox="0 0 35 57" fill="none" xmlns="http://www.w3.org/2000/svg">
	              <path d="M0.921875 0.300293H15.5316L34.812 28.1329L15.3898 56.3003H0.921875L19.7412 28.3003L0.921875 0.300293Z" fill="#F17C23"/>
	            </svg>';
		    } else {
	        $blockquote_one_shortcode .= '<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
	            <path d="M37.4387 24.0503C37.4387 31.5007 31.4076 37.5408 23.9684 37.5408C16.5292 37.5408 10.4981 31.5007 10.4981 24.0503C10.4981 16.5999 16.5292 10.5598 23.9684 10.5598C31.4076 10.5598 37.4387 16.5999 37.4387 24.0503ZM47.9324 24.0503C47.9324 10.7984 37.2004 0.050293 23.964 0.050293C10.7277 0.050293 0 10.7984 0 24.0503C0 37.3021 10.732 48.0503 23.964 48.0503C37.196 48.0503 47.9281 37.3021 47.9281 24.0503" fill="#F17C23"></path>
	            </svg>
	        <svg width="30" height="49" viewBox="0 0 30 49" fill="none" xmlns="http://www.w3.org/2000/svg">
	            <path d="M0.933594 0.050293H13.4562L29.9822 23.9068L13.3346 48.0503H0.933594L17.0645 24.0503L0.933594 0.050293Z" fill="#F17C23"></path>
	        </svg>';
	    }
	        $blockquote_one_shortcode .= '</div>';
	    if(!empty($case_study_blockquote_one_link)){
	    	$blockquote_one_shortcode .= '<a href="'.$case_study_blockquote_one_link.'">';
	   	}
	        $blockquote_one_shortcode .= '<h3>'.$case_study_blockquote_one_text.'</h3>';
	    if(!empty($case_study_blockquote_one_link)){
	    	$blockquote_one_shortcode .= '</a>';
	    }
	        $blockquote_one_shortcode .= '</div>';
	        $blockquote_one_shortcode .= '<div class="case-study-data-bracket right absolute radius-24"></div>';
	        $blockquote_one_shortcode .= '</div>';
	        $blockquote_one_shortcode .= '</div>';
	        $blockquote_one_shortcode .= '<hr>';
	    }
	}
    return $blockquote_one_shortcode;
}

add_shortcode('blockquote-one', 'shortcode_blockquote_one');

function shortcode_blockquote_two( $atts = array() ) {
	if (is_page_template('templates/services-detail.php')) {
		$service_detail_blockquote_two_text = get_field('service_detail_blockquote_two_text');
		$service_detail_blockquote_two_link = get_field('service_detail_blockquote_two_link');
		if(!empty($service_detail_blockquote_two_text)){
			$blockquote_two_shortcode = '<div class="sub-detail-line-wrap">';
                $blockquote_two_shortcode .= '<div class="default-line-in flex flex-vcenter fs-24">';
                  $blockquote_two_shortcode .= '<div class="default-line-text">';
                $blockquote_two_shortcode .= '<p>';
                if(!empty($service_detail_blockquote_two_link)){
                    $blockquote_two_shortcode .= '<a href="'.$service_detail_blockquote_two_link.'">';
                }
                $blockquote_two_shortcode .= ''.$service_detail_blockquote_two_text.'';
                if(!empty($service_detail_blockquote_two_link)){
                    $blockquote_two_shortcode .= '</a>';
                }
                $blockquote_two_shortcode .= '</p>';
                  $blockquote_two_shortcode .= '</div>';
                  $blockquote_two_shortcode .= '<div class="default-line-arrow flex">
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <path d="M37.4387 24.0503C37.4387 31.5007 31.4076 37.5408 23.9684 37.5408C16.5292 37.5408 10.4981 31.5007 10.4981 24.0503C10.4981 16.5999 16.5292 10.5598 23.9684 10.5598C31.4076 10.5598 37.4387 16.5999 37.4387 24.0503ZM47.9324 24.0503C47.9324 10.7984 37.2004 0.050293 23.964 0.050293C10.7277 0.050293 0 10.7984 0 24.0503C0 37.3021 10.732 48.0503 23.964 48.0503C37.196 48.0503 47.9281 37.3021 47.9281 24.0503" fill="#F17C23" ></path>
                    </svg>
                    <svg width="30" height="49" viewBox="0 0 30 49" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <path d="M0.933594 0.050293H13.4562L29.9822 23.9068L13.3346 48.0503H0.933594L17.0645 24.0503L0.933594 0.050293Z" fill="#F17C23" ></path>
                    </svg>';
                  $blockquote_two_shortcode .= '</div>';
                $blockquote_two_shortcode .= '</div>';
            $blockquote_two_shortcode .= '</div>';
	    }
	} else if (is_page_template('templates/industries-detail.php')) {
		$industry_detail_blockquote_two_text = get_field('industry_detail_blockquote_two_text');
		$industry_detail_blockquote_two_link = get_field('industry_detail_blockquote_two_link');
		if(!empty($industry_detail_blockquote_two_text)){
			$blockquote_two_shortcode = '<div class="sub-detail-line-wrap">';
                $blockquote_two_shortcode .= '<div class="default-line-in flex flex-vcenter fs-24">';
                  $blockquote_two_shortcode .= '<div class="default-line-text">';
                $blockquote_two_shortcode .= '<p>';
                if(!empty($industry_detail_blockquote_two_link)){
                    $blockquote_two_shortcode .= '<a href="'.$industry_detail_blockquote_two_link.'">';
                }
                $blockquote_two_shortcode .= ''.$industry_detail_blockquote_two_text.'';
                if(!empty($industry_detail_blockquote_two_link)){
                    $blockquote_two_shortcode .= '</a>';
                }
                $blockquote_two_shortcode .= '</p>';
                  $blockquote_two_shortcode .= '</div>';
                  $blockquote_two_shortcode .= '<div class="default-line-arrow flex">
                    <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <path d="M37.4387 24.0503C37.4387 31.5007 31.4076 37.5408 23.9684 37.5408C16.5292 37.5408 10.4981 31.5007 10.4981 24.0503C10.4981 16.5999 16.5292 10.5598 23.9684 10.5598C31.4076 10.5598 37.4387 16.5999 37.4387 24.0503ZM47.9324 24.0503C47.9324 10.7984 37.2004 0.050293 23.964 0.050293C10.7277 0.050293 0 10.7984 0 24.0503C0 37.3021 10.732 48.0503 23.964 48.0503C37.196 48.0503 47.9281 37.3021 47.9281 24.0503" fill="#F17C23" ></path>
                    </svg>
                    <svg width="30" height="49" viewBox="0 0 30 49" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <path d="M0.933594 0.050293H13.4562L29.9822 23.9068L13.3346 48.0503H0.933594L17.0645 24.0503L0.933594 0.050293Z" fill="#F17C23" ></path>
                    </svg>';
                  $blockquote_two_shortcode .= '</div>';
                $blockquote_two_shortcode .= '</div>';
            $blockquote_two_shortcode .= '</div>';
            
	    }
	} else {
		$case_study_blockquote_two_text = get_field('case_study_blockquote_two_text');
		$case_study_blockquote_two_link = get_field('case_study_blockquote_two_link');
		if(!empty($case_study_blockquote_two_text)){
			$blockquote_two_shortcode = '<div class="case-study-data-block">';
	        $blockquote_two_shortcode .= '<div class="case-study-data-wrap relative">';
	        $blockquote_two_shortcode .= '<div class="case-study-data-bracket left absolute radius-24"></div>';
	        $blockquote_two_shortcode .= '<div class="case-study-data-main flex flex-vcenter">';
	        $blockquote_two_shortcode .= '<div class="case-study-icon flex">';
	    if(in_category(17)){
	        $blockquote_two_shortcode .= '<svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.6784 28.3003C43.6784 36.9924 36.6422 44.0392 27.9631 44.0392C19.284 44.0392 12.2478 36.9924 12.2478 28.3003C12.2478 19.6082 19.284 12.5614 27.9631 12.5614C36.6422 12.5614 43.6784 19.6082 43.6784 28.3003ZM55.9212 28.3003C55.9212 12.8398 43.4004 0.300293 27.958 0.300293C12.5157 0.300293 0 12.8398 0 28.3003C0 43.7608 12.5207 56.3003 27.958 56.3003C43.3954 56.3003 55.9161 43.7608 55.9161 28.3003" fill="#F17C23"/>
            </svg>
	        <svg width="35" height="57" viewBox="0 0 35 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.921875 0.300293H15.5316L34.812 28.1329L15.3898 56.3003H0.921875L19.7412 28.3003L0.921875 0.300293Z" fill="#F17C23"/>
            </svg>';
	    } else {
	    	$blockquote_two_shortcode .= '<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
	            <path d="M37.4387 24.0503C37.4387 31.5007 31.4076 37.5408 23.9684 37.5408C16.5292 37.5408 10.4981 31.5007 10.4981 24.0503C10.4981 16.5999 16.5292 10.5598 23.9684 10.5598C31.4076 10.5598 37.4387 16.5999 37.4387 24.0503ZM47.9324 24.0503C47.9324 10.7984 37.2004 0.050293 23.964 0.050293C10.7277 0.050293 0 10.7984 0 24.0503C0 37.3021 10.732 48.0503 23.964 48.0503C37.196 48.0503 47.9281 37.3021 47.9281 24.0503" fill="#F17C23"></path>
	            </svg>
	        <svg width="30" height="49" viewBox="0 0 30 49" fill="none" xmlns="http://www.w3.org/2000/svg">
	            <path d="M0.933594 0.050293H13.4562L29.9822 23.9068L13.3346 48.0503H0.933594L17.0645 24.0503L0.933594 0.050293Z" fill="#F17C23"></path>
	        </svg>';
	    }
	        $blockquote_two_shortcode .= '</div>';
	    if(!empty($case_study_blockquote_two_link)){
	    	$blockquote_two_shortcode .= '<a href="'.$case_study_blockquote_two_link.'">';
	   	}
	        $blockquote_two_shortcode .= '<h3>'.$case_study_blockquote_two_text.'</h3>';
	    if(!empty($case_study_blockquote_two_link)){
	    	$blockquote_two_shortcode .= '</a>';
	    }
	        $blockquote_two_shortcode .= '</div>';
	        $blockquote_two_shortcode .= '<div class="case-study-data-bracket right absolute radius-24"></div>';
	        $blockquote_two_shortcode .= '</div>';
	        $blockquote_two_shortcode .= '</div>';
	        $blockquote_two_shortcode .= '<hr>';
	    }
	}
    return $blockquote_two_shortcode;
}

add_shortcode('blockquote-two', 'shortcode_blockquote_two');

function shortcode_video( $atts = array() ) {
	if (is_page_template('templates/industries-detail.php')){
	$industry_detail_video_image = get_field('industry_detail_video_image');
	$industry_detail_video_image_m = get_field('industry_detail_video_image_mobile');
	$industry_detail_video_image_mobile = $industry_detail_video_image_m ? $industry_detail_video_image_m : $industry_detail_video_image;
	$industry_detail_video_type = get_field('industry_detail_video_type');
	$industry_detail_youtube_video_id = get_field('industry_detail_youtube_video_id');
	$industry_detail_vimeo_video_id = get_field('industry_detail_vimeo_video_id');
	if(!empty($industry_detail_video_image)){
		$video_short_code = '<div class="fluid-container relative">';
        $video_short_code .= '<div class="container msd">';
        $video_short_code .= '<section class="video-section">';
        $video_short_code .= '<div class="video-main">';
        $video_short_code .= '<div class="video-image relative">';
       	if(!empty($industry_detail_video_image)){
            $video_short_code .= '<picture class="video-thumb radius-img-24">';
                $video_short_code .= '<source srcset="'.$industry_detail_video_image['url'].'" media="(min-width: 744px)" type="image/webp" />';
                $video_short_code .= '<img src="'.$industry_detail_video_image_mobile['url'].'" alt="'.$industry_detail_video_image_mobile['alt'].'" />';
            $video_short_code .= '</picture>';
        }
        if($industry_detail_video_type == 'youtube'){
	        if(!empty($industry_detail_youtube_video_id)){
	            $video_short_code .= '<div class="play-btn-main flex flex-center">
	                <div class="play-btn relative">
	                    <a href="https://www.youtube.com/watch?v='.$industry_detail_youtube_video_id.'" class="popup-youtube play-btn-bg flex flex-center radius-50" >
	                    <i class="fa-light fa-sharp fa-play"></i>
	                    <span class="btn-circle"></span>
	                    <span></span>
	                    <span></span>
	                    video
	                    </a>
	                </div>
	            </div>';
	        }
    	} else if($industry_detail_video_type == 'vimeo'){
    		if(!empty($industry_detail_vimeo_video_id)){
	            $video_short_code .= '<div class="play-btn-main flex flex-center">
	                <div class="play-btn relative">
	                    <a href="https://www.vimeo.com/'.$industry_detail_vimeo_video_id.'" class="popup-youtube play-btn-bg flex flex-center radius-50" >
	                    <i class="fa-light fa-sharp fa-play"></i>
	                    <span class="btn-circle"></span>
	                    <span></span>
	                    <span></span>
	                    video
	                    </a>
	                </div>
	            </div>';
	        }
    	} else {}
        $video_short_code .= '</div>';
        $video_short_code .= '</div>';
        $video_short_code .= '</section>';
        $video_short_code .= '</div>';
        $video_short_code .= '</div>';
    }

    return $video_short_code;
	} else{

	$services_detail_video_image = get_field('services_detail_video_image');
	$services_detail_video_image_m = get_field('services_detail_video_image_mobile');
	$services_detail_video_image_mobile = $services_detail_video_image_m ? $services_detail_video_image_m : $services_detail_video_image;
	$services_detail_video_type = get_field('services_detail_video_type');
	$services_detail_video_youtube = get_field('services_detail_video_youtube');
	$services_detail_video_vimeo = get_field('services_detail_video_vimeo');
	if(!empty($services_detail_video_youtube || $services_detail_video_vimeo)){
		$video_short_code = '<div class="fluid-container relative">';
        $video_short_code .= '<div class="container msd">';
        $video_short_code .= '<section class="video-section">';
        $video_short_code .= '<div class="video-main">';
        $video_short_code .= '<div class="video-image relative">';
       	if(!empty($services_detail_video_image)){
            $video_short_code .= '<picture class="video-thumb radius-img-24">';
                $video_short_code .= '<source srcset="'.$services_detail_video_image['url'].'" media="(min-width: 744px)" type="image/webp" />';
                $video_short_code .= '<img src="'.$services_detail_video_image_mobile['url'].'" alt="'.$services_detail_video_image_mobile['alt'].'" />';
            $video_short_code .= '</picture>';
        }
        if($services_detail_video_type == 'youtube'){
	        if(!empty($services_detail_video_youtube)){
	            $video_short_code .= '<div class="play-btn-main flex flex-center">
	                <div class="play-btn relative">
	                    <a href="https://www.youtube.com/watch?v='.$services_detail_video_youtube.'" class="popup-youtube play-btn-bg flex flex-center radius-50" >
	                    <i class="fa-light fa-sharp fa-play"></i>
	                    <span class="btn-circle"></span>
	                    <span></span>
	                    <span></span>
	                    video
	                    </a>
	                </div>
	            </div>';
	        }
    	} else if($services_detail_video_type == 'vimeo'){
    		if(!empty($services_detail_video_vimeo)){
	            $video_short_code .= '<div class="play-btn-main flex flex-center">
	                <div class="play-btn relative">
	                    <a href="https://www.vimeo.com/'.$services_detail_video_vimeo.'" class="popup-youtube play-btn-bg flex flex-center radius-50" >
	                    <i class="fa-light fa-sharp fa-play"></i>
	                    <span class="btn-circle"></span>
	                    <span></span>
	                    <span></span>
	                    video
	                    </a>
	                </div>
	            </div>';
	        }
    	} else {}
        $video_short_code .= '</div>';
        $video_short_code .= '</div>';
        $video_short_code .= '</section>';
        $video_short_code .= '</div>';
        $video_short_code .= '</div>';
    }

    return $video_short_code;
} }

add_shortcode('video', 'shortcode_video');

function shortcode_micro_cta( $atts = array() ) {

	$micro_cta_desktop_image = get_field('micro_cta_desktop_image');
	$micro_cta_m_image = get_field('micro_cta_mobile_image');
	$micro_cta_mobile_image = $micro_cta_m_image ? $micro_cta_m_image : $micro_cta_desktop_image;
	$micro_cta_sub_heading = get_field('micro_cta_sub_heading');
	$micro_cta_heading = get_field('micro_cta_heading');
	$micro_cta_button_text = get_field('micro_cta_button_text');
	$micro_cta_button_link = get_field('micro_cta_button_link');
	if(empty($micro_cta_desktop_image)){
		$no_micro_cta_image_cls = "no_micro_cta_image";
	} else {
		$no_micro_cta_image_cls = "";
	}
	if(!empty($micro_cta_desktop_image || $micro_cta_heading)){
		$microcta_short_code = '<section class="micro-cta-section">';
        $microcta_short_code .= '<div class="container p-0">';
           	$microcta_short_code .= '<div class="micro-cta-main">';
            $microcta_short_code .= '<div class="micro-cta-row flex row-reverse radius-16 relative o-hidden '.$no_micro_cta_image_cls.'">';
           	if(!empty($micro_cta_desktop_image)){
                $microcta_short_code .= '<div class="micro-cta-image relative">';
                    $microcta_short_code .= '<div class="micro-cta-pointer absolute"></div>';
                    $microcta_short_code .= '<div class="micro-cta-chevron absolute"></div>';
                    $microcta_short_code .= '<picture class="micro-cta-thumb object-fit">';
                        $microcta_short_code .= '<source srcset="'.$micro_cta_desktop_image['url'].'" media="(min-width: 1024px)">';
                        $microcta_short_code .= '<img src="'.$micro_cta_mobile_image['url'].'" alt="'.$micro_cta_desktop_image['alt'].'">';
                    $microcta_short_code .= '</picture>';
                $microcta_short_code .= '</div>';
                }
                
                $microcta_short_code .= '<div class="micro-cta-text inverted fs-20 f-300 relative">';
                    $microcta_short_code .= '<div class="micro-cta-circle hide-tablet hide-mobile absolute">';
                        $microcta_short_code .= '<svg xmlns="http://www.w3.org/2000/svg" width="499" height="500" viewBox="0 0 499 500" fill="none">
                            <path d="M389.755 250C389.755 172.392 326.968 109.474 249.523 109.474C172.077 109.474 109.29 172.392 109.29 250C109.29 327.608 172.077 390.526 249.523 390.526C326.968 390.526 389.755 327.608 389.755 250ZM499 250C499 388.04 387.274 500 249.477 500C111.681 500 0 388.04 0 250C0 111.96 111.726 3.05176e-05 249.477 3.05176e-05C387.229 3.05176e-05 498.955 111.96 498.955 250" fill="#004C97"/>';
                          $microcta_short_code .= '</svg>';
                    $microcta_short_code .= '</div>';
                if(!empty($micro_cta_sub_heading || $micro_cta_heading)){
                    $microcta_short_code .= '<div class="micro-cta-desc">';
                   	if(!empty($micro_cta_sub_heading)){
                        $microcta_short_code .= '<span class="optional-text light-blue">'.$micro_cta_sub_heading.'</span>';
                    }
                    if(!empty($micro_cta_heading)){
                        $microcta_short_code .= '<h2 class="h4">'.$micro_cta_heading.'</h2>';
                    }
                    if(!empty($micro_cta_button_text && $micro_cta_button_link)){
                        $microcta_short_code .= '<div class="micro-cta-btns">';
                            $microcta_short_code .= '<a href="'.$micro_cta_button_link.'" class="text-btn-link sm inline-flex f-600"><span>'.$micro_cta_button_text.'</span><svg xmlns="http://www.w3.org/2000/svg" width="29" height="53" viewBox="0 0 29 53" fill="none"> <path d="M0 0.800049H10.3162L28.2194 26.6446L10.1845 52.8H0L17.4751 26.8L0 0.800049Z" fill="#F17C23"></path></svg></a>';
                        $microcta_short_code .= '</div>';
                    }
                    $microcta_short_code .= '</div>';

                }
                $microcta_short_code .= '</div>';
            $microcta_short_code .= '</div>';
    		$microcta_short_code .= '</div>';
        $microcta_short_code .= '</div>';
        $microcta_short_code .= '</section>';
    }

    return $microcta_short_code;
}

add_shortcode('microcta', 'shortcode_micro_cta');

function shortcode_faq( $atts = array() ) {

	if( have_rows('default_page_faqs') ):
	$faq_short_code = '<div class="accordion-main">';

	while ( have_rows('default_page_faqs') ) : the_row();
            $default_page_faq_question = get_sub_field('default_page_faq_question');
            $default_page_faq_answer = get_sub_field('default_page_faq_answer');
            if(!empty($default_page_faq_question && $default_page_faq_answer)){
		        
		            $faq_short_code .= '<div class="accordion-list orange-tint-bg radius-8">';
		                $faq_short_code .= '<div class="accordion-header"><span class="ui-plus absolute b-transition"></span>'.$default_page_faq_question.'</div>';
		                $faq_short_code .= '<div class="accordion-content"><div class="accordion-desc">
		                    '.$default_page_faq_answer.'
		                </div></div>';
		            $faq_short_code .= '</div>';

		        
    		}
	endwhile;
	$faq_short_code .= '</div>';
	endif;

    return $faq_short_code;
}

add_shortcode('faq', 'shortcode_faq');

function shortcode_content_images( $atts = array() ) {
	if (is_page_template('templates/industries-detail.php')) {
	if( have_rows('industry_detail_images') ){
		$content_img_short_code = '<div class="fluid-container relative">';
		$content_img_short_code .= '<div class="container md">';
		$content_img_short_code .= '<div class="inline-images-row flex">';
		while ( have_rows('industry_detail_images') ) : the_row();
            $industry_detail_images_image = get_sub_field('industry_detail_images_image');
            $industry_detail_images_image_m = get_sub_field('industry_detail_images_image_mobile');
            $industry_detail_images_image_mobile = $industry_detail_images_image_m ? $industry_detail_images_image_m : $industry_detail_images_image;
            $industry_detail_images_image_caption = get_sub_field('industry_detail_images_image_caption');
        if(!empty($industry_detail_images_image)){
		
            $content_img_short_code .= '<div class="inline-images-list flex">';
                $content_img_short_code .= '<div class="inline-images-caption">';
                    $content_img_short_code .= '<picture class="inline-caption-thumb object-fit radius-img-24">';
                        $content_img_short_code .= '<source srcset="'.$industry_detail_images_image['url'].'" media="(min-width: 744px)">';
                        $content_img_short_code .= '<img src="'.$industry_detail_images_image_mobile['url'].'" alt="'.$industry_detail_images_image_mobile['alt'].'">';
                    $content_img_short_code .= '</picture>';
                $content_img_short_code .= '</div>';
            if(!empty($industry_detail_images_image_caption)){
                $content_img_short_code .= '<div class="inline-caption-text fs-14">';
                    $content_img_short_code .= '<div class="inline-caption-desc">';
                        $content_img_short_code .= '<p>'.$industry_detail_images_image_caption.'</p>';
                    $content_img_short_code .= '</div>';
                $content_img_short_code .= '</div>';
            }
            $content_img_short_code .= '</div>';
		} endwhile;
        $content_img_short_code .= '</div></div></div>';
    return $content_img_short_code;
} } else{
	if( have_rows('case_study_content_images') ):
		$content_img_short_code = '<div class="fluid-container relative">';
		$content_img_short_code .= '<div class="container msd">';
		$content_img_short_code .= '<div class="inline-images-row flex">';
		while ( have_rows('case_study_content_images') ) : the_row();
            $case_study_content_image = get_sub_field('case_study_content_image');
            $case_study_content_image_m = get_sub_field('case_study_content_image_mobile');
            $case_study_content_image_mobile = $case_study_content_image_m ? $case_study_content_image_m : $case_study_content_image;
            $case_study_content_image_caption = get_sub_field('case_study_content_image_caption');
        if(!empty($case_study_content_image)){
		
            $content_img_short_code .= '<div class="inline-images-list flex">';
                $content_img_short_code .= '<div class="inline-images-caption">';
                    $content_img_short_code .= '<picture class="inline-caption-thumb object-fit radius-img-24">';
                        $content_img_short_code .= '<source srcset="'.$case_study_content_image['url'].'" media="(min-width: 744px)">';
                        $content_img_short_code .= '<img src="'.$case_study_content_image_mobile['url'].'" alt="'.$case_study_content_image['alt'].'">';
                    $content_img_short_code .= '</picture>';
                $content_img_short_code .= '</div>';
            if(!empty($case_study_content_image_caption)){
                $content_img_short_code .= '<div class="inline-caption-text fs-14">';
                    $content_img_short_code .= '<div class="inline-caption-desc">';
                        $content_img_short_code .= '<p>'.$case_study_content_image_caption.'</p>';
                    $content_img_short_code .= '</div>';
                $content_img_short_code .= '</div>';
            }
            $content_img_short_code .= '</div>';
		} endwhile;
        $content_img_short_code .= '</div></div></div>';
    endif;

    return $content_img_short_code;
} }

add_shortcode('images', 'shortcode_content_images');

function get_custom_cat_template($single_template) {
   global $post;

      if ( in_category(17)) {
         $single_template = dirname( __FILE__ ) . '/single-casestudy.php';
      }
   return $single_template;
}

add_filter( "single_template", "get_custom_cat_template" ) ;


function service_banner(){ 
	$banner_image 	= get_field('banner_desktop_image');
	$banner_image_m 		= get_field('banner_image_mobile');
	$banner_image_mobile 	= 	$banner_image_m ? $banner_image_m : $banner_image;
	$banner_h         = get_field('banner_heading');
	if(empty($banner_h)){
		$banner_heading = get_the_title(); 
	}else{
		$banner_heading = $banner_h;
	}
	
	$banner_description		= get_field('banner_description');
	if(empty($banner_image)){
		$no_banner_image = "no_banner_image";
	}	else{
		$no_banner_image = "";
	}
	$banner_button_text = get_field('banner_button_text');
	$banner_button_link = get_field('banner_button_link');
	$banner_link_text	= get_field('banner_link_text');
	$banner_link		= get_field('banner_link');

	$current_page_id = get_the_ID();
	$parent_id = wp_get_post_parent_id($current_page_id);
	$parent_title = get_the_title($parent_id);
	

	?>
	<section class="banner-section relative o-hidden">
		<div class="banner-wrap">
			<div class="banner-main flex no-wrap relative <?php echo $no_banner_image; ?>"><!-- if no banner image add this no_banner_image -->
				<?php if(!empty($banner_image)){ ?>
					<div class="banner-image relative">
						<div class="banner-pointer absolute"></div>
						<div class="banner-chevron absolute"></div>
						<picture class="banner-thumb object-fit">
							<source srcset="<?php echo $banner_image['url']; ?>" media="(min-width: 1024px)">
							<img src="<?php echo $banner_image_mobile['url']; ?>" alt="<?php echo $banner_image_mobile['alt']; ?>">
						</picture>
					</div>
				<?php } if(!empty($banner_heading || $banner_description)) {?>
					<div class="banner-text inverted flex flex-vcenter relative">
						<div class="banner-desc fs-20">
							<div class="banner-circle absolute">
								<svg class="hide-tablet hide-mobile" width="639" height="640" viewBox="0 0 639 640" fill="none">
									<path d="M498.416 320C498.416 220.662 418.125 140.127 319.088 140.127C220.051 140.127 139.76 220.662 139.76 320C139.76 419.338 220.051 499.873 319.088 499.873C418.125 499.873 498.416 419.338 498.416 320ZM638.118 320C638.118 496.691 495.244 640 319.03 640C142.817 640 0 496.691 0 320C0 143.309 142.874 0 319.03 0C495.186 0 638.061 143.309 638.061 320" fill="#004C97"/>
								</svg>
								<svg class="hide-mobile hide-desktop" width="484" height="485" viewBox="0 0 484 485" fill="none">
									<path d="M377.727 242.331C377.727 167.104 316.878 106.116 241.822 106.116C166.766 106.116 105.917 167.104 105.917 242.331C105.917 317.559 166.766 378.547 241.822 378.547C316.878 378.547 377.727 317.559 377.727 242.331ZM483.6 242.331C483.6 376.137 375.322 484.663 241.778 484.663C108.234 484.663 0 376.137 0 242.331C0 108.526 108.278 0 241.778 0C375.279 0 483.556 108.526 483.556 242.331" fill="url(#paint0_linear_2095_20080)"/>
									<defs>
									<linearGradient id="paint0_linear_2095_20080" x1="241.8" y1="0" x2="241.8" y2="484.663" gradientUnits="userSpaceOnUse">
										<stop stop-color="#004C97" stop-opacity="0"/>
										<stop offset="1" stop-color="#004C97"/>
									</linearGradient>
									</defs>
								</svg>
								<svg class="hide-tablet hide-desktop" width="254" height="254" viewBox="0 0 254 254" fill="none">
									<path d="M198.002 127.029C198.002 87.5948 166.105 55.6252 126.761 55.6252C87.4177 55.6252 55.5211 87.5948 55.5211 127.029C55.5211 166.462 87.4177 198.432 126.761 198.432C166.105 198.432 198.002 166.462 198.002 127.029ZM253.5 127.029C253.5 197.169 196.741 254.057 126.739 254.057C56.7356 254.057 0 197.169 0 127.029C0 56.8884 56.7585 0 126.739 0C196.719 0 253.477 56.8884 253.477 127.029" fill="url(#paint0_linear_2095_20082)"/>
									<defs>
									<linearGradient id="paint0_linear_2095_20082" x1="126.75" y1="0" x2="126.75" y2="254.057" gradientUnits="userSpaceOnUse">
										<stop stop-color="#004C97" stop-opacity="0"/>
										<stop offset="1" stop-color="#004C97"/>
									</linearGradient>
									</defs>
								</svg>
							</div>
								<span class="optional-text light-blue"><?php echo  $parent_title; ?></span>
								<h1><?php echo $banner_heading; ?></h1>
								<?php echo $banner_description; ?>
								<?php if(!empty($banner_button_text || $banner_link_text)){ ?>
									<div class="banner-btns flex flex-vcenter">
										<?php if(!empty($banner_button_text && $banner_button_link)){ ?>
											<a href="<?php echo $banner_button_link; ?>" class="button btn-transparent"><?php echo $banner_button_text; ?></a>
										<?php } if(!empty($banner_link_text && $banner_link)){ ?>
											<a href="<?php echo $banner_link; ?>" class="text-link white inline-flex f-600"><?php echo $banner_link_text; ?><i class="transition-3 fa-light fa-sharp fa-arrow-right"
											aria-hidden="true"></i></a>
										<?php } ?>
									</div>
								<?php } ?>
						</div>
					</div>
				<?php } ?>
			</div>
		</div>
		</section>
	<?php }

function my_admin_scripts() {
    $localize = array(
        'ajaxurl' => admin_url( 'admin-ajax.php' )
    );
    wp_localize_script( 'my-ajax-request', 'MyAjax', $localize);
    wp_enqueue_script( 'my-solutions-ajax-request', get_template_directory_uri() . '/dist/ajax-solutions.js', array( 'jquery' ), 1.7 );
    wp_localize_script( 'my-solutions-ajax-request', 'MyAjax', $localize);
}  

add_action( 'wp_enqueue_scripts', 'my_admin_scripts' );

add_action( 'wp_ajax_load-solutions-content', 'my_load_ajax_solutions_content' );
add_action ( 'wp_ajax_nopriv_load-solutions-content', 'my_load_ajax_solutions_content' );

function my_load_ajax_solutions_content () {
  global $post;
      $sub_page_id = $_POST['sub_page_id'];
        if($sub_page_id == '566'){
        $solutions_sub_pages_rel = get_field('home_select_services', 2);
        if(!empty($solutions_sub_pages_rel)){
            $solutions_sub_pages = $solutions_sub_pages_rel;
        }
        else{
            $solutions_sub_pages = get_pages( array( 'child_of' => $sub_page_id, 'sort_column' => 'menu_order', 'sort_order' => 'ASC' ) );
        }
      }else{
        $solutions_sub_pages_rel = get_field('home_select_industries', 2);
        if(!empty($solutions_sub_pages_rel)){
            $solutions_sub_pages = $solutions_sub_pages_rel;
        }
        else{
            $solutions_sub_pages = get_pages( array( 'child_of' => $sub_page_id, 'sort_column' => 'menu_order', 'sort_order' => 'ASC' ) );
        }
      }
     
      $response = '';    
      foreach( $solutions_sub_pages as $post ) {
        setup_postdata($post);
        $service_page_icon_type = get_field('service_page_icon_type', $post->ID);
        $pages_short_description = get_field('pages_short_description', $post->ID);
        $service_page_icon = get_field('service_page_icon', $post->ID);
        $service_page_icon_class = get_field('service_page_icon_class', $post->ID);
        $response .= '<div class="service-item">';
        if(!empty($service_page_icon_class || $service_page_icon)){
            $response .= '<div class="service-icon">
                <a href="#">
                    <i class="fa-thin fa-arrow-right"></i>
                </a>';
            if($service_page_icon_type == 'font-awesome'){
                $response .= '<i class="'.$service_page_icon_class.'"></i>';
            } else if($service_page_icon_type == 'icon'){
            	$response .= '<figure class="object-fit">
	                        <img src="'.$service_page_icon['url'].'" alt="'.$service_page_icon['alt'].'">
	                    </figure>';
            } else {}
            $response .= '</div>';
        }
            $response .= '<h6><a href="'.get_page_link( $post->ID ).'">'.$post->post_title.'</a></h6>';
           	if (!empty($pages_short_description)) {
                $response .= '<p>'.$pages_short_description.'</p>';
            }
        $response .= '</div>';
    }
        $response .= '<div class="service-item">';
            $response .= '<a href="'.get_page_link( $sub_page_id ).'">';
                $response .= '<div class="service-icon">';
                    $response .= '<i class="fa-thin fa-arrow-right"></i>';
                $response .= '</div>';
                $response .= '<h6>All '.get_page_title( $sub_page_id ).'</h6>';
            $response .= '</a>';
        $response .= '</div>';
      echo $response;
      die(1);
}

function default_banner(){
	
		$banner_image_2x = get_field('banner_desktop_image');
		$banner_image_m_2x = get_field('banner_mobile_image');
		$banner_image_mobile_2x = $banner_image_m_2x ? $banner_image_m_2x : $banner_image_2x;
		$banner_sub_heading = get_field('banner_sub_heading');
		$banner_h = get_field('banner_heading');
		if(empty($banner_h)){
			$banner_heading = get_the_title();
		}else{
			$banner_heading = $banner_h;
		}
		$banner_description = get_field('banner_description');
		if(empty($banner_image_2x)){
			$no_banner_img_cls = "no_banner_image";
		} else {
			$no_banner_img_cls = "";
		}
		$banner_button_text = get_field('banner_button_text');
		$banner_button_link = get_field('banner_button_link');
		$banner_link_text = get_field('banner_link_text');
		$banner_link = get_field('banner_link');

	if(!empty($banner_image_2x || $banner_heading)){ ?>
	<section class="banner-section relative o-hidden">
	    <div class="banner-wrap">
	        <div class="banner-main flex no-wrap relative <?php echo $no_banner_img_cls; ?>"><!-- if no banner image add this no_banner_image -->
	        <?php if(!empty($banner_image_2x)){ ?>
	            <div class="banner-image relative">
	                <div class="banner-pointer absolute"></div>
	                <div class="banner-chevron absolute"></div>
	                <picture class="banner-thumb object-fit">
	                    <source srcset="<?php echo $banner_image_2x['url']; ?>" media="(min-width: 1024px)">
	                    <img src="<?php echo $banner_image_mobile_2x['url']; ?>" alt="<?php echo $banner_image_2x['alt']; ?>">
	                </picture>
	            </div>
	       	<?php } ?>
	            <div class="banner-text inverted flex flex-vcenter relative">
	                <div class="banner-desc fs-20">
	                    <div class="banner-circle absolute">
	                        <svg class="hide-tablet hide-mobile" width="639" height="640" viewBox="0 0 639 640" fill="none">
	                            <path d="M498.416 320C498.416 220.662 418.125 140.127 319.088 140.127C220.051 140.127 139.76 220.662 139.76 320C139.76 419.338 220.051 499.873 319.088 499.873C418.125 499.873 498.416 419.338 498.416 320ZM638.118 320C638.118 496.691 495.244 640 319.03 640C142.817 640 0 496.691 0 320C0 143.309 142.874 0 319.03 0C495.186 0 638.061 143.309 638.061 320" fill="#004C97"/>
	                        </svg>
	                        <svg class="hide-mobile hide-desktop" width="484" height="485" viewBox="0 0 484 485" fill="none">
	                            <path d="M377.727 242.331C377.727 167.104 316.878 106.116 241.822 106.116C166.766 106.116 105.917 167.104 105.917 242.331C105.917 317.559 166.766 378.547 241.822 378.547C316.878 378.547 377.727 317.559 377.727 242.331ZM483.6 242.331C483.6 376.137 375.322 484.663 241.778 484.663C108.234 484.663 0 376.137 0 242.331C0 108.526 108.278 0 241.778 0C375.279 0 483.556 108.526 483.556 242.331" fill="url(#paint0_linear_2095_20080)"/>
	                            <defs>
	                                <linearGradient id="paint0_linear_2095_20080" x1="241.8" y1="0" x2="241.8" y2="484.663" gradientUnits="userSpaceOnUse">
	                                <stop stop-color="#004C97" stop-opacity="0"/>
	                                <stop offset="1" stop-color="#004C97"/>
	                                </linearGradient>
	                            </defs>
	                            </svg>
	                            <svg class="hide-tablet hide-desktop" width="254" height="254" viewBox="0 0 254 254" fill="none">
	                            <path d="M198.002 127.029C198.002 87.5948 166.105 55.6252 126.761 55.6252C87.4177 55.6252 55.5211 87.5948 55.5211 127.029C55.5211 166.462 87.4177 198.432 126.761 198.432C166.105 198.432 198.002 166.462 198.002 127.029ZM253.5 127.029C253.5 197.169 196.741 254.057 126.739 254.057C56.7356 254.057 0 197.169 0 127.029C0 56.8884 56.7585 0 126.739 0C196.719 0 253.477 56.8884 253.477 127.029" fill="url(#paint0_linear_2095_20082)"/>
	                            <defs>
	                                <linearGradient id="paint0_linear_2095_20082" x1="126.75" y1="0" x2="126.75" y2="254.057" gradientUnits="userSpaceOnUse">
	                                <stop stop-color="#004C97" stop-opacity="0"/>
	                                <stop offset="1" stop-color="#004C97"/>
	                                </linearGradient>
	                            </defs>
	                            </svg>
	                    </div>
	                        <span class="optional-text light-blue"><?php echo $banner_sub_heading; ?></span>
	                        <h1><?php echo $banner_heading; ?></h1>
	                        <?php echo $banner_description; ?>
	                <?php if(!empty($banner_button_text || $banner_link_text)){ ?>
	                    <div class="banner-btns flex flex-vcenter">
	                   	<?php if(!empty($banner_button_text && $banner_button_link)){ ?>
                            <a href="<?php echo $banner_button_link; ?>" class="button btn-transparent"><?php echo $banner_button_text; ?></a>
                       	<?php } ?>
                       	<?php if(!empty($banner_link_text && $banner_link)){ ?>
                            <a href="<?php echo $banner_link; ?>" class="text-link white inline-flex f-600"><?php echo $banner_link_text; ?> <i class="transition-3 fa-light fa-sharp fa-arrow-right" aria-hidden="true"></i></a>
                        <?php } ?>
                        </div>
                    <?php } ?>
	                </div>
	            </div>
	        </div>
	    </div>
	    </section>
	<?php }
}


function social_proof(){
	$home_social_proof_heading = get_field('home_social_proof_heading');
	
	if(!empty(($home_social_proof_heading)|| have_rows('home_social_proof_numbers'))){ 	
	?>
	<section class="social-proof-section relative o-hidden">
		<div class="social-proof-bg background-bg"></div>
		<div class="container">
			<div class="social-proof-main flex">
				<div class="social-proof-dot">
					<div class="social-dot-circle relative">
						<span class="s-blue-circle absolute"></span>
						<span class="s-blue-gradient absolute"></span>
                        <div class="s-blue-gradient absolute">
                            <span class="ripple ripple-delay-1"></span>
                            <span class="ripple ripple-delay-2"></span>
                            <span class="ripple ripple-delay-3"></span>
                            <span class="ripple ripple-delay-4"></span>
                            <span class="ripple ripple-delay-5"></span>
                            <span class="ripple ripple-delay-6"></span>
                            <span class="ripple ripple-delay-7"></span>
                        </div>
					</div>
				</div>
				<?php if(!empty($home_social_proof_heading)){ ?>
					<div class="social-proof-title relative">
						<h1><?php echo $home_social_proof_heading; ?></h1>
					</div>
				<?php } if( have_rows('home_social_proof_numbers') ):?>
				<div class="social-proof-counter flex relative" data-counter-main="counter-main">
					<?php while ( have_rows('home_social_proof_numbers') ) : the_row();
						$home_social_proof_number = get_sub_field('home_social_proof_number');
						$home_social_proof_number_symbol_before = get_sub_field('home_social_proof_number_symbol_before');
						$home_social_proof_number_symbol_after = get_sub_field('home_social_proof_number_symbol_after');
						$home_social_proof_number_text = get_sub_field('home_social_proof_number_text');
						if(empty($home_social_proof_number)){ 
							$no_number = "no_number";
						}else{
							$no_number = "";
						}
						if(!empty($home_social_proof_number || $home_social_proof_number_text)){
					?>
						<div class="social-proof-counter-list <?php echo $no_number; ?>">
							<?php if(!empty($home_social_proof_number)){ ?>
								<div class="counter-num flex">
								<?php if(!empty($home_social_proof_number_symbol_before)){ ?>
									<span><?php echo $home_social_proof_number_symbol_before; ?></span>
								<?php } ?>
									<span class="counter" data-count-duration="2000" data-count-to="<?php echo $home_social_proof_number; ?>"><?php echo $home_social_proof_number; ?></span>
								<?php if(!empty($home_social_proof_number_symbol_after)){ ?>
									<span><?php echo $home_social_proof_number_symbol_after; ?></span>
								<?php } ?>
								</div>
							<?php } ?>
							<?php if(!empty($home_social_proof_number_text)){ ?>
								<div class="counter-desc">
									<p><?php echo $home_social_proof_number_text; ?></p>
								</div>
							<?php } ?>
						</div>
					<?php } endwhile; ?>
				</div>
				<?php endif; ?>
			</div>
		</div>
	</section>
	<?php  } wp_reset_postdata();
}

function select_case_study(){
$select_case_studies            = get_field('select_case_studies');
$k = 1;
if ($select_case_studies) {
    foreach ($select_case_studies as $post) {
        setup_postdata($post); // Setup post data for the current post within the loop

        $case_studies_desktop_img = get_field('banner_image');
        $case_studies_mobile_img = get_field('banner_image_mobile');
        
        // Default images from category 17 if not set
        if (empty($case_studies_desktop_img)) {
            $case_studies_image = get_field('banner_image', 'category_17');
        } else {
            $case_studies_image = $case_studies_desktop_img;
        }
        if (empty($case_studies_mobile_img)) {
            $case_studies_image_mobile = get_field('banner_image_mobile', 'category_17');
        } else {
            $case_studies_image_mobile = $case_studies_mobile_img;
        }

        $insight_short_description = get_field('insight_short_description', $post->ID);
        //$ideascategories = get_the_category($post->ID);
		
        if($k==2){
            $color_cls = "teal";
            $extra_cls = '<div class="alt-stickme white-bg">';
            $extra_cls_close = '</div>';
        } else if($k==3){
            $color_cls = "pink white-bg";
            $extra_cls = '';
            $extra_cls_close = '';
        } else {
            $color_cls = "";
            $extra_cls = '<div class="alt-stickme white-bg">';
            $extra_cls_close = '</div>';
        }

        // Determine CSS classes based on the loop iteration
        $rev_cls = ($k % 2 == 1) ? "row-reverse" : "";
        $no_rept_img = empty($case_studies_image) ? "no_repeater_image" : "";

        ?>
        <section class="alt-feature-section alt-white <?php echo $color_cls; ?>">
            <?php echo $extra_cls; ?>
                <div class="alt-feature-main flex <?php echo $rev_cls; ?> <?php echo $no_rept_img; ?>">
                    <div class="alt-feature-list alt-feature-image relative">
                        <div class="alt-feature-svg absolute">
                            <svg width="80" height="161" viewBox="0 0 80 161" fill="none">
                                <path d="M28.3228 159.269H1.79548L50.391 80.795L50.7171 80.2686L50.391 79.7421L1.79548 1.26855H28.6976L78.8145 79.7915L28.3228 159.269Z" stroke="#41B4FF" stroke-width="2"/>
                            </svg>
                        </div>
                        <?php if (!empty($case_studies_image)) { ?>
                            <picture class="alt-feature-thumb object-fit">
                                <source srcset="<?php echo $case_studies_image['url']; ?>" media="(min-width: 744px)">
                                <img src="<?php echo $case_studies_image_mobile['url']; ?>" alt="<?php echo $case_studies_image['alt']; ?>">
                            </picture>
                        <?php } ?>
                    </div>
                    <div class="alt-feature-list alt-feature-text flex flex-vcenter">
                        <div class="alt-feature-desc fs-16">
                            <h3><a href="<?php echo get_the_permalink($post->ID); ?>"><?php echo get_the_title($post->ID); ?></a></h3>
                            <?php 
								$cats_to_ignore = array(1, 2, 17); 
								$countcategories = wp_get_post_categories($post->ID); 
								$category_in = array_diff($countcategories, $cats_to_ignore); 

								if (!empty($category_in)) : ?>
									<ul class="alt-order flex">
										<?php
										$resultstr = ''; // Initialize as a string

										foreach ($category_in as $category_id) :
											$breadcrumb_category = get_category($category_id);
											if (!in_array($breadcrumb_category->term_id, $cats_to_ignore)) {
												$breadcrumb_cat_title = $breadcrumb_category->name;
												$breadcrumb_catid = $breadcrumb_category->term_id;
												$category_icon_type = get_field('category_icon_type', 'category_' . $breadcrumb_catid);

												$li_content = '<li class="fs-14"><a class="flex" href="' . get_category_link($breadcrumb_catid) . '">';

												if ($category_icon_type == 'font-awesome') {
													$category_icon_class = get_field('category_icon_class', 'category_' . $breadcrumb_catid);
													$category_icon_class_color = get_field('category_icon_class_color', 'category_' . $breadcrumb_catid);

													if (!empty($category_icon_class)) {
														$li_content .= '<div class="post-array-icon"><i class="' . $category_icon_class . '" style="color:' . $category_icon_class_color . '"></i></div>';
													}
												} else {
													$category_icon = get_field('category_icon', 'category_' . $breadcrumb_catid);
													$category_icon_url = $category_icon['url'];

													if (!empty($category_icon_url)) {
														$li_content .= '<figure class="object-fit"><img src="' . $category_icon_url . '" alt="icon"></figure>';
													}
												}

												$li_content .= '<span class="fs-15">' . $breadcrumb_cat_title . '</span></a></li>';
												
												
												$resultstr .= $li_content;
											}
										endforeach;

										echo $resultstr;
										?>
									</ul>
							<?php endif; ?>
                            <?php if (!empty($insight_short_description)) { ?>
                                <p><?php echo $insight_short_description; ?></p>
                            <?php } ?>
                            <div class="alt-feature-btns flex flex-vcenter">
								<?php if(is_page_template('templates/industries.php')){ ?>
                                <a href="<?php echo get_the_permalink($post->ID); ?>" class="button btn-transparent">Read the case study</a>
								<!-- <a href="<?php //echo get_the_permalink($post->ID); ?>" class="text-link inline-flex f-600">alternative<i class="transition-3 fa-light fa-sharp fa-arrow-right" aria-hidden="true"></i></a> -->
								<?php } else{?>
									<a href="<?php echo get_the_permalink($post->ID); ?>" class="button btn-transparent">Read the case study</a>
									<!-- <a href="<?php //echo get_the_permalink($post->ID); ?>" class="text-link inline-flex f-600">Relevant industry<i class="transition-3 fa-light fa-sharp fa-arrow-right" aria-hidden="true"></i></a> -->
								<?php }	?>
							</div>
                        </div>
                    </div>
                </div>
            <?php echo $extra_cls_close; ?>
        </section>
        <?php
        $k++;
    }
    wp_reset_postdata(); // Restore original Post Data
	}  
}
add_filter('walker_nav_menu_start_el', 'maiorano_generate_nav_images', 20, 4);
function maiorano_generate_nav_images($item_output, $item, $depth, $args){
	
	if($item->menu_item_parent == 3173 || $item->menu_item_parent == 3204){
		$menu_item_icon = "".get_stylesheet_directory_uri()."/images/link-arrow-icon@2x.png";
		$dom = new DOMDocument();
        $dom->loadHTML($item_output, \LIBXML_HTML_NODEFDTD | \LIBXML_HTML_NOIMPLIED);
        $img = $dom->createDocumentFragment();
        $node = $dom->createElement('img');
    	$node->setAttribute('src', $menu_item_icon);
    	$node->setAttribute('alt', "menu-icon");
    	$node->setAttribute('class', "menu-image menu-image-title-after");
        $dom->getElementsByTagName('a')->item(0)->prepend($node);
        $item_output = $dom->saveHTML();
	} else if($item->menu_item_parent == 3331){
		$menu_item_icon = "".get_stylesheet_directory_uri()."/images/label-icon@2x.png";
		$dom = new DOMDocument();
        $dom->loadHTML($item_output, \LIBXML_HTML_NODEFDTD | \LIBXML_HTML_NOIMPLIED);
        $img = $dom->createDocumentFragment();
        $node = $dom->createElement('img');
    	$node->setAttribute('src', $menu_item_icon);
    	$node->setAttribute('alt', "menu-icon");
    	$node->setAttribute('class', "menu-image menu-image-title-after");
        $dom->getElementsByTagName('a')->item(0)->prepend($node);
        $item_output = $dom->saveHTML();
	} else if($item->menu_item_parent == 3330){
		$category_icon_type = get_field('category_icon_type', 'category_'.$item->object_id);
		if($category_icon_type == 'font-awesome'){
	        $category_icon_class = get_field('category_icon_class', 'category_'.$item->object_id);
		    $dom = new DOMDocument();
	        $dom->loadHTML($item_output, \LIBXML_HTML_NODEFDTD | \LIBXML_HTML_NOIMPLIED);
	        $img = $dom->createDocumentFragment();
	        $node = $dom->createElement('i');
	    	$node->setAttribute('class', $category_icon_class);
	        $dom->getElementsByTagName('a')->item(0)->prepend($node);
	        $item_output = $dom->saveHTML();
	    } else if($category_icon_type == 'icon'){

	    	$menu_item_icon_obj = get_field('category_icon', 'category_'.$item->object_id);
			$menu_item_icon = $menu_item_icon_obj['url'];
			if(!empty($menu_item_icon)){
				$dom = new DOMDocument();
		        $dom->loadHTML($item_output, \LIBXML_HTML_NODEFDTD | \LIBXML_HTML_NOIMPLIED);
		        $img = $dom->createDocumentFragment();
		        $node = $dom->createElement('img');
		    	$node->setAttribute('src', $menu_item_icon);
		    	$node->setAttribute('alt', "menu-icon");
		    	$node->setAttribute('class', "menu-image menu-image-title-after");
		        $dom->getElementsByTagName('a')->item(0)->prepend($node);
		        $item_output = $dom->saveHTML();
		    }
	    } else {}
		
	} else {
		$menu_item_icon_obj = get_field('service_page_icon', $item->object_id);
		$menu_item_icon = $menu_item_icon_obj['url'];
		if(!empty($menu_item_icon)){
			$dom = new DOMDocument();
	        $dom->loadHTML($item_output, \LIBXML_HTML_NODEFDTD | \LIBXML_HTML_NOIMPLIED);
	        $img = $dom->createDocumentFragment();
	        $node = $dom->createElement('img');
	    	$node->setAttribute('src', $menu_item_icon);
	    	$node->setAttribute('alt', "menu-icon");
	    	$node->setAttribute('class', "menu-image menu-image-title-after");
	        $dom->getElementsByTagName('a')->item(0)->prepend($node);
	        $item_output = $dom->saveHTML();
	    }
	}
    return $item_output;
}
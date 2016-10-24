<?php 
get_header();
?>



<!-- Generated with page.php -->

		<div class="page reader static centered">
				
			<?php if (have_posts()) : ?>
			<?php while (have_posts()) : the_post(); ?>
	
			<article class="margin-bottom-4" id="post-<?php the_ID(); ?>">
				<h3 class="ptitle"><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h3>
					<div class="">
						<?php the_content(); ?>
					</div><!-- / -->
				
			</article><!-- / -->
		
			
			<?php endwhile; ?>
			
			
			<?php else: ?>
			
			<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
		
			<?php endif; ?>
					
				
		</div>
		
<!-- End page.php -->

<?php  ?>

<?php get_footer() ?>
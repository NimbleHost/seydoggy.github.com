// Flavorite (c) 2012 Adam Merrifield http://seydoggy.github.com/libs/themes/rw/Flavorite.js

jQuery.noConflict();
jQuery(document).ready(function($){
	var sdFlavoriteFunctions = (function(){
		// VARIABLES
		var jq = $([]),
		siteHeader = jq.add('div.siteHeader'),
		logoImg = siteHeader.find('a.logo img'),
		title = siteHeader.find('hgroup.title'),
		siteTitle = title.find('h1.site_title'),
		siteSlogan = title.find('h2.site_slogan'),
		mContainer = jq.add('div.mainContainer'),
		mContentBg = mContainer.find('.mainContainer_bg'),
		bContainer = mContainer.find('.breadcrumbContainer'),
		mPreContent = mContainer.find('div.preContent'),
		mContent = mContainer.find('section.mainContent'),
		mContentInner = mContent.find('div.mainContent_inner'),
		fsI = jq.add('div.filesharing-item'),
		bEntry = jq.add('div.blog-entry'),
		sContent = mContainer.find('section.sidebarContent');
		sTitle = sContent.find('div.sidebar_title'),
		sidebar = sContent.find('div.sidebar'),
		pSidebar = mContainer.find('section.plugin_sidebar'),
		postContainer = jq.add('div.postContainer'),
		fContent = jq.add('footer.footerContainer').find('.footerContent'),
		cBox = $('.contentBox');
		
		// FUNCTIONS
		
		// GENERAL STYLES
		// invoke slideshow
		$.SeydoggySlideshow();
		
		// add contentBox to mainContent_inner in not blog or file sharing pages
		if (!fsI.length || !bEntry.length) mContentInner.addClass('contentBox');;
		// !hide !empty sidebar
		if (sTitle.html().length || sidebar.html().length) sContent.css('display','block');
		
		// TOOLBAR SPLIT/VERTICAL OPTIONS
		var sdNavOptions = (function(){
			// invoke sdSmartNav
			$.sdSmartNav();
			
			// if mobile
			var responsiveNavHelper = function () {
				if (jq.add(window).width() <= '600' && jq.add('meta[name=viewport]').length) {
					// remove additional tiers
					sdNav.tb2.remove();
					sdNav.tb3.remove();
					// add link to navigation
					if (!$('.responsiveMenu').length) {
						$('<a href="#toolbar_vertical" title="menu" class="responsiveMenu"></a>').prependTo(siteHeader).css({
							"background-image":"url(https://d2c8zg9eqwmdau.cloudfront.net/rw/plus.black.32.png)",
							"background-repeat":"no-repeat",
							"float":"right",
							"height":"32px",
							"margin-top":(siteHeader.height()/2)-16,
							"width":"32px"
						});
					}
					// move nav after footer
					sdNav.tb1.insertAfter('.footerNormal').attr('id','toolbar_vertical')
						.css({'display':'block','margin-top':'2em'})
						.find('a.current').siblings('ul')
							.css("display", "block")
							.end().parents("ul").css("display", "block");
					// capture first and last items for toolbar_vertical
					sdNav.tb1.find('ul:first li:last a').css('border-style', 'none');
					sdNav.tb1.find('ul a:first').addClass('firstLink');
					sdNav.tb1.find('ul:first li:last').addClass('lastListItem');
					sdNav.tb1.find('ul:first li:last a').addClass('lastLink');
				} else {
					// capture first and last items for toolbar_vertical
					sdNav.tb3.find('ul:first li:last a').css('border-style', 'none');
					sdNav.tb3.find('ul a:first').addClass('firstLink');
					sdNav.tb3.find('ul:first li:last').addClass('lastListItem');
					sdNav.tb3.find('ul:first li:last a').addClass('lastLink');
				}
			};

			responsiveNavHelper();

			$(window).on('resize orientationchange', responsiveNavHelper);
		})();


		// TITLE VERTICAL ALIGNMENT
		var sdTitleAlign = (function(){
			logoImg.css('padding-top','0').sdVertAlign(siteHeader);
			title.css('padding-top','0').sdVertAlign(siteHeader);
			// if not mobile
			if (!(jq.add(window).width() <= '600')) {
				sdNav.tb1.css('padding-top','0').sdVertAlign(siteHeader);
			}
		})();

		// EXTRACONTENT
		var sdExtracontent = (function(){
			// EC 1 is handled in SS3
			// VARIABLES
			var myEC = '#myExtraContent',
			ec = [
				mPreContent,
				postContainer,
				fContent
			],
			ecValue = ec.length;
			/* ExtraContent (jQuery) VERSION: r1.4.2 */
			for (i=2;i<=ecValue + 1;i++) {
				if ($(myEC + i).length) {
					$(myEC + i + ' script').remove();
					$(myEC + i).appendTo('#extraContainer'+i).show();
					// !hide !empty ExtraContent areas
					ec[i-2].show();
				}
			}
		})();

		// VARIOUS PAGE STYLE
		var sdPageStyles = (function(){
			// styles for File Sharing page
			if (fsI.length) fsI.width(fsI.parent().outerWidth(true) / 3 - 45).addClass('contentBox').css('padding','1em').sdSetHeight(fsI,0);
			// styles for Blog page
			if(bEntry.length) bEntry.addClass('contentBox').css('padding','1em'), pSidebar.children().first().css('margin-top','15px');
			// undo maincontent styles
			if (fsI.length || bEntry.length)
				mContentInner.css({ 'background-color':'transparent', 'padding':'0', 'border-style':'none','box-shadow':'none' });
		})();
		
		// ALBUM
		var sdAlbums = (function(){
			// invoke sdLightboxAlbums
			$.sdLightboxAlbums({
				css_file	:	'https://d2c8zg9eqwmdau.cloudfront.net/prettyphoto/jquery.prettyPhoto.css',
				js_file		:	'https://d2c8zg9eqwmdau.cloudfront.net/prettyphoto/jquery.prettyPhoto.js',
				animation_speed	:	'fast',
				show_title		:	false,
				theme			:	'light_square'
			});

			$.sdAlbumStyle({
				plusClass : 'radiusAll'
			});
		})();
	})();
});
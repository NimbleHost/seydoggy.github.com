/* sdFlavoriteFunctions */
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
		
		/* @group general styles */
		// invoke slideshow
		$.SeydoggySlideshow();
		
		// add contentBox to mainContent_inner in not blog or file sharing pages
		if (!fsI.length || !bEntry.length) mContentInner.addClass('contentBox');;
		// !hide !empty sidebar
		if (sTitle.html().length || sidebar.html().length) sContent.css('display','block');
		
		/* @end */
		
		/* @group toolbar split/vertical options */
		var sdNavOptions = (function(){
			// invoke sdSmartNav
			$.sdSmartNav();
			
			// capture first and last items for toolbar_vertical
			sdNav.tb3.find('ul:first li:last a').css('border-style', 'none');
			sdNav.tb3.find('ul a:first').addClass('firstLink');
			sdNav.tb3.find('ul:first li:last').addClass('lastListItem');
			sdNav.tb3.find('ul:first li:last a').addClass('lastLink');
		})();
		/* @end */

		/* @group title vertical alignment */
		var sdTitleAlign = (function(){
			logoImg.css('padding-top','0').sdVertAlign(siteHeader);
			title.css('padding-top','0').sdVertAlign(siteHeader);
			sdNav.tb1.css('padding-top','0').sdVertAlign(siteHeader);
		})();
		/* @end */

		/* @group ExtraContent */
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
		/* @end */

		/* @group various page style */
		var sdPageStyles = (function(){
			// styles for File Sharing page
			if (fsI.length) fsI.width(fsI.parent().outerWidth(true) / 3 - 45).addClass('contentBox').css('padding','1em').sdSetHeight(fsI,0);
			// styles for Blog page
			if(bEntry.length) bEntry.addClass('contentBox').css('padding','1em'), pSidebar.children().first().css('margin-top','15px');
			// undo maincontent styles
			if (fsI.length || bEntry.length)
				mContentInner.css({ 'background-color':'transparent', 'padding':'0', 'border-style':'none','box-shadow':'none' });
		})();
		/* @end */
		
		/* @group Album */
		var sdAlbums = (function(){
			// invoke sdLightboxAlbums
			$.sdLightboxAlbums({
				css_file	:	'http://seydoggy.github.com/libs/prettyPhoto/jquery.prettyPhoto.css',
				js_file		:	'http://seydoggy.github.com/libs/prettyPhoto/jquery.prettyPhoto.js',
				animation_speed	:	'fast',
				show_title		:	false,
				theme			:	'light_square'
			});

			$.sdAlbumStyle({
				plusClass : 'radiusAll'
			});
		})();
		/* @end */
	})();
});
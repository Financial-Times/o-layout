# o-layout

This component provides a responsive full page layout for internal documentation and tooling.
It provides:
- consistent design (typography, colors),
- ease of set up (header, footer, sidebar, navigation),

<body class="o-layout">
	<header class="o-layout__area--header">
	<!-- header will be included with o-layout -->
	</header>
	<div class="o-layout__area--sidebar">
	<!-- usually nav goes here -->
	</div>
	<div class="o-layout__area--main">
	<!-- All content goes here -->
	<!-- asides need to be in a section: -->
		<section class="o-layout__column--center-aside">
			<div></div>
			<aside></aside>
	</div>
	<footer class="o-layout__area--footer">
	<!-- footer will be included with o-layout -->
	</footer>
</body>

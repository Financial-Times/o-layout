export default Layout;
declare class Layout {
    /**
     * Get the heading content.
     * @param {Element} heading
     * @access private
     */
    static _getContentFromHeading(heading: Element): string;
    /**
     * Get the data attributes from the layoutEl. If the layout is being set up
     * declaratively, this method is used to extract the data attributes from the DOM.
     * @param {HTMLElement} layoutElement - The layout element in the DOM
     */
    static getDataAttributes(layoutElement: HTMLElement): {};
    /**
     * Initialise layout component.
     * @param {(HTMLElement|String)} rootElement - The root element to intialise the layout in, or a CSS selector for the root element
     * @param {Object} [options={}] - An options object for configuring layout behaviour.
     */
    static init(rootEl: any, opts: any): any;
    /**
     * Class constructor.
     * @param {HTMLElement} [layoutElement] - The layout element in the DOM
     * @param {Object} [options={}] - An options object for configuring aspects of the layout
     */
    constructor(layoutEl: any, options?: any);
    layoutEl: any;
    options: any;
    linkedHeadings: any;
    navHeadings: any;
    /**
     * Construct the sidebar navigation from headings within the DOM.
     */
    constructNavFromDOM(): void;
    /**
    * Enables navigation item highlighting based on scroll position.
    * Relies on heading ids and anchor href being the same.
    * @param {HTMLElement} [navigation] - the sidebar navigation list in the DOM
    */
    highlightNavItems(navigation?: HTMLElement): void;
}

export default LinkedHeading;
/**
 * Represents a linked heading.
 * @public
 */
declare class LinkedHeading {
    /**
     * Class constructor.
     * @public
     * @param {HTMLElement} headingElement - The heading element in the DOM
     * @param {Object} [options={}] - An options object for configuring the linked heading
     * @param {String} [options.content="¶"] - The content to add to the created link
     * @param {String} [options.title="Link directly to this section of the page"] - The title attribute to add to the created link
     */
    constructor(headingElement: HTMLElement, options?: {
        content: string;
        title: string;
    });
    headingElement: HTMLElement;
    id: string;
    options: any;
    linkElement: HTMLElement;
    /**
     * Construct the heading link element. If a link element already exists inside the heading,
     * then this method will do nothing
     * @private
     * @returns {HTMLElement} Returns the new link element, or the existing link element if present
     */
    private constructLinkElement;
}

export default function Button({ children, textOnly, additionalCssClasses, ...props }) {
    let cssClasses = textOnly ? 'text-button' : 'button'
    if(additionalCssClasses){
        cssClasses += ' ' + additionalCssClasses;
    }

    return (<button className={cssClasses} {...props}>{children}</button>);
}
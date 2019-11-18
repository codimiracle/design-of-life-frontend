import Markdown from 'react-markdown';
const HtmlVisiter = (props) => {
    <div>
        HTML visiting.
        <iframe src="about:blank" />
    </div>
}
const LifeDesignDetails = (props) => {
    const lifeDesign = props.lifeDesign;
    return (
        <div className="life-design-details">
            {lifeDesign.isMarkdown && <Markdown source={lifeDesign.content} />}
            {lifeDesign.isHtml && <HtmlVisiter html={lifeDesign.content} />}
        </div>
    );
};

export default LifeDesignDetails;
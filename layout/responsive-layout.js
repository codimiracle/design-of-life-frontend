import MiddleDeviceLayout from "./middle-device-layout";

class ResponsiveLayout extends React.Component {
    render() {
        return (<MiddleDeviceLayout functionals={this.props.functionals}>{this.props.children}</MiddleDeviceLayout>);
    }
}
export default ResponsiveLayout;
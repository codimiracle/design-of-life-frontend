import TimeToDo from '../components/time-to-do';

const User = (props) => (
    <div className="user-area">
        <div className="avatar"></div>
        <style jsx>{`
            .user-area {
                width: 48px;
                height: 48px;
                border: 1px solid lightgrey;
                border-radius: 100%;
            }
            .avatar {
                background-size: cover;
                background-image: url(${props.user ? props.user.avatar : './#noavatar'});
            }
        `}</style>
    </div>
);
const Header = (props) => (
    <header>
        <div className="present">Design of life</div>
        <div>
            <TimeToDo />
        </div>
        <User />
        <style jsx>{`
            .present {
                line-height: 48px;
            }
            header {
                height: 48px;
                padding: 8px;
                display: flex;
                justify-content: space-between;
                box-shadow: 0 0 8px 8px lightgrey;
            }
        `}</style>
    </header>
);

export default Header;
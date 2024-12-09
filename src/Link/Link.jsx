import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div className='hover:bg-orange-100 '>
            <li className="mr-8 " key={route.id}><a href={route.path}>{route.name}</a></li>
        </div>
    );
};
Link.propTypes={
    route: PropTypes.object
}

export default Link;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions/index';
class FilterLink extends Component {
  onClick = () => {
    this.props.setVisibilityFilter(this.props.filter);
  };

  render() {
    return (
      <Link
        active={this.props.filter === this.props.visibilityFilter}
        onClick={this.onClick}
      >
        {this.props.children}
      </Link>
    );
  }
}

const Link = ({ active, children, onClick }) => {
  // Validamos que sea el filtro active true
  // Si es así enviamos es un span en vez de un <a>.
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

const mapDispatchToProps = {
  setVisibilityFilter
};

function mapStateToProps(state, props) {
  // console.log(state);
  return { visibilityFilter: state.listFilter };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);

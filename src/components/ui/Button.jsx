import PropTypes from "prop-types";

function Button(props) {
  function variantClass(variant) {
    switch (variant) {
      case "red":
        return "text-white bg-red hover:bg-red focus:ring-4 focus:ring-red font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red dark:hover:bg-red focus:outline-none dark:focus:ring-red";

      case "outline-red":
        return "text-red hover:text-white border border-red hover:bg-red focus:ring-4 focus:outline-none focus:ring-red font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red dark:text-red dark:hover:text-white dark:hover:bg-red dark:focus:ring-red";
    }
  }

  return (
    <button className={variantClass(props.variant)} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Button;

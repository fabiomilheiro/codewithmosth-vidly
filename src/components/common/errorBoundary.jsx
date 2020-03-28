import React, { Component } from "react";
import logger from "./../../services/logger";

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    logger.logError(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>An error happened.</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

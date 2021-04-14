import React from 'react';

interface Props {
  isEdit?: boolean;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.log(error);
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // TODO: sentery upload
    console.log(error, errorInfo);
  }

  render() {
    const { children, isEdit } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return (
        isEdit ? (
          <h1 style={{ color: 'red' }}>Something went wrong.</h1>
        ) : null
      );
    }

    return children;
  }
}

export default ErrorBoundary;

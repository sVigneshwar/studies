import React from 'react'

export class ErrorBoundary extends React.Component{
    state = {hasError: false}

    static getDerivedStateFromError(error){
        return {hasError: false}
    }

    componentDidCatch(error, info){
        console.log(error, info);
        
    }

    render(){
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }
}

<ErrorBoundary>
    <p>Tesiting purpose</p>
</ErrorBoundary>
type StatusProps = {
    status: "loading" | "error" | "success"
}

export default function Status(props:StatusProps) {
    let message;
    if(props.status === "loading"){
        message = "Data Loading"
    }else if(props.status === "error"){
        message = "Something went Wrong!"
    }else if(props.status === "success"){
        message = "Data loaded successfully"
    }
  return (
    <>
     <h2>Status - {message}</h2>
    </>
  )
}

import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
const ModalCard = ({ modal }) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [video, setVideo] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const id = modal.id
        const getData = async () => {
            const req = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
            );
            const res = await req.json();
            const modalVideo = await fetch(`https://api.themoviedb.org/3/movie/${res.id}/videos?api_key=${API_KEY}`)
            const modalVideoRes = await modalVideo.json()
            setVideo(modalVideoRes)

        }
        getData()
    }, [])

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false} className="modal-container">
                <Modal.Header closeButton className="modal-content">
                    {
                        video?.results && video?.results?.length > 0 ? <iframe
                            src={`https://www.youtube.com/embed/${video?.results[0]?.key}?autoplay=1`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                            className="video__btn-lm"
                        /> : <iframe
                            src={`https://www.youtube.com/embed/Rb_tqxQKSPM?autoplay=1`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                            className="video__btn-lm"
                        />
                    }

                </Modal.Header >
                <Modal.Body className="heading-title">{video?.results?.title && video?.results?.original_title ? video?.results?.title : "I'm don't have a money buy api"}</Modal.Body>
                <Modal.Body>Date: {video?.results?.release_date ? video?.results?.release_date : "I'm don't have a money buy api"}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Donate
                    </Button>
                </Modal.Footer>
            </Modal >
        </div >
    )
}

export default ModalCard

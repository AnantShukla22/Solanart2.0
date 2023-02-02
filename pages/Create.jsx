import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/CreateNft.module.css"
import NftImg from "../images/b.png"
import NftCardPreview from "../components/NftCardPreview"
import { useState } from "react"
import LoadingModal from "../components/LoadingModal"
import Alert from "../components/Alert"


const CreateNft = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [imgBase64, setImgBase64] = useState(NftImg)
  const [loading, setLoading] = useState(false)
  const [loadingMsg, setLoadingMsg] = useState('')
  const [mintInfo, setMintInfo] = useState("Pass")//tells if minted or not  // if pass then tick else cross
  const [alert, setAlert] = useState(false)  // to open when processing done

  const handleSubmit = async () => {
    e.preventDefault()
    setLoading(true);
    setLoadingMsg("Uploading to ipfs...")
    resetForm()
  }

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setPrice('')
    setFileUrl('')
    setImgBase64(NftImg)
  }

  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>
            Create Nft
          </h1>
          <div className={styles.gridWrapper}>
            <div className={styles.CreateLeft}>
              <h3>Preview Image</h3>
              <NftCardPreview title={title} description={description} price={price} imgBase64={imgBase64} />
            </div>
            <div className={styles.CreateRight}>

              <form onSubmit={handleSubmit}>

                <div className={styles.CreateRightHeading}>
                  <h3>Input Nft Details</h3>

                  <button className={styles.createBtn}>Create NFT</button>

                </div>

                <div className={styles.formInput}>
                  <label htmlFor="">Upload Image</label>
                  {/* for local img to import we have to react a oject url of the local url of the image */}
                  <input type="file" required placeholder="Browse" className={styles.uploadInput}
                    onChange={(e) => setImgBase64(URL.createObjectURL(e.target.files[0]))}
                  />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="">Title</label>
                  <input type="text" required placeholder="Enter Title Of Nft (Eth)" className={styles.childInput} onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="">Price</label>
                  <input type="number" required placeholder="Enter Price Of Nft (Eth)" className={styles.childInput} onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>

                <div className={styles.formInput}>
                  <label htmlFor="">Description</label>
                  <textarea cols="30" required rows="10" placeholder="Enter Nft Description" className={styles.CreateTextarea} onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                </div>
              </form>

              <div className={styles.CreateRightHeadingAct}>
                <button className={styles.createBtn}>Create NFT</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      
      {/* make loading false when its time for alert to open */}
      {loading &&
        <LoadingModal loadingMsg={loadingMsg} setLoading={setLoading} />
      }
      {/* change make info accordingly */}
      {alert &&
        <Alert loadingMsg={loadingMsg} setAlert={setAlert} mintInfo={mintInfo} />
      }
      
    </>

  )
}

export default CreateNft
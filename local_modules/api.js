const contractAddress = 'TQmt7kpQnNd9hFbepfaRFcSrXachRNGrkT'

const api = {
  tronWeb: false,
  async setTronWeb(tronWeb) {
    this.tronWeb = tronWeb
    if (this.tronWeb) {
      this.contract = await tronWeb.contract().at(contractAddress)
    }
    return this.tronWeb
  }
}

export default api
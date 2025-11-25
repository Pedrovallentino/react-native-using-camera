import { MyPhoto } from "../entities/MyPhoto";

class PhotoService {
  private photos: MyPhoto[] = [];

  async add(photo: MyPhoto): Promise<void> {
    // simula persistência
    this.photos = [photo, ...this.photos];
  }

  async getAll(): Promise<MyPhoto[]> {
    // retorna cópia ordenada por timestamp desc (mais recentes primeiro)
    return [...this.photos].sort((a, b) => b.timestamp - a.timestamp);
  }

  async clear(): Promise<void> {
    this.photos = [];
  }
}

export default new PhotoService();

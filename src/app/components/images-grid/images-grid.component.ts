import { Component, OnInit } from '@angular/core';
import { images } from 'src/assets/images';
import { Router } from '@angular/router';

@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.css']
})
export class ImagesGridComponent implements OnInit {
  public images: any = images.images;
  public task: any = images.task;
  currentPage = 1;
  itemsPerPage = 8;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  getPaginatedImages(): string[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.images.slice(startIndex, endIndex);
  }
  totalPages(): number {
    return Math.ceil(this.images.length / this.itemsPerPage);
  }

  navigateToImage(imageUrl: any): void {
    let fImage = imageUrl
    let index = this.images.indexOf(fImage);
    if (index !== -1) {
      this.task.push(index)
      this.images.splice(index, 1);
    }
    this.router.navigate(['/full-image', fImage]);

  }



}

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
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalItems: number = this.images.length;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  totalPages(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  onPageClick(page: number | string): void {
    if (typeof page === 'number') {
      this.onPageChange(page);
    }
  }

  getPageNumbers(): (number | string)[] {
    const pages: (number | string)[] = [];
    const totalPages = this.totalPages();
    const currentPage = this.currentPage;

    if (totalPages.length <= 5) {
      pages.push(...totalPages);
    } else {
      if (currentPage <= 4) {
        pages.push(...totalPages.slice(0, 4), '...');
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...');
      }
    }
    return pages;
  }

  isEllipsis(page: number | string): boolean {
    return typeof page === 'string';
  }

  getPaginatedImages(): string[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.images.slice(startIndex, endIndex);
  }

  getDisplayRange(): string {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = Math.min(startIndex + this.itemsPerPage - 1, this.totalItems);
    return `${startIndex} to ${endIndex} of ${this.totalItems} Entries`;
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

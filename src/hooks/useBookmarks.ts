import { useState, useEffect } from "react";

export interface Bookmark {
	id: string;
	rover: string;
	camera: string | null;
	sol: number | null;
	earthDate: string | null;
}

export const useBookmarks = () => {
	const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

	useEffect(() => {
		const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks") ?? "[]");
		if (storedBookmarks) {
			setBookmarks(storedBookmarks);
		}
	}, []);

    const saveBookmark = (bookmark: Bookmark) => {
        const isBookmarkExists = bookmarks.some((b) =>
          isSameBookmark(b, bookmark)
        );
      
        if (isBookmarkExists) {
          console.log('Bookmark already exists.');
          return;
        }
      
        const updatedBookmarks = [...bookmarks, bookmark];
        setBookmarks(updatedBookmarks);
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      };
      
      const isSameBookmark = (bookmark1: Bookmark, bookmark2: Bookmark): boolean => {
        return (
          bookmark1.rover === bookmark2.rover &&
          bookmark1.camera === bookmark2.camera &&
          bookmark1.sol === bookmark2.sol &&
          bookmark1.earthDate === bookmark2.earthDate
        );
      };
	const deleteBookmark = (bookmark: Bookmark) => {
		const updatedBookmarks = bookmarks.filter((b) => b !== bookmark);
		setBookmarks(updatedBookmarks);
		localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
	};

	return {
		bookmarks,
		saveBookmark,
		deleteBookmark,
	};
};

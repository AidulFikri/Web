<?php
// Namespace untuk menyusun kode
namespace LibrarySystem;

// Trait untuk memberikan fitur tambahan
trait Logger {
    public function log($message) {
        echo "[Log]: " . $message . "\n";
    }
}

// Abstract Class sebagai dasar kelas lainnya
abstract class Item {
    protected $title;
    protected $author;

    public function __construct($title, $author) {
        $this->title = $title;
        $this->author = $author;
    }

    abstract public function getDetails();
}

// Class Buku yang mewarisi dari Item
class Book extends Item {
    private $pageCount;

    public function __construct($title, $author, $pageCount) {
        parent::__construct($title, $author);
        $this->pageCount = $pageCount;
    }

    public function getDetails() {
        return "Book: {$this->title} by {$this->author}, {$this->pageCount} pages";
    }
}

// Class Majalah yang mewarisi dari Item
class Magazine extends Item {
    private $issueNumber;

    public function __construct($title, $author, $issueNumber) {
        parent::__construct($title, $author);
        $this->issueNumber = $issueNumber;
    }

    public function getDetails() {
        return "Magazine: {$this->title} by {$this->author}, Issue #{$this->issueNumber}";
    }
}

// Class Koleksi dengan penerapan Trait dan pengelolaan item
class Collection {
    use Logger;

    private $items = [];

    public function addItem(Item $item) {
        $this->items[] = $item;
        $this->log("Item '{$item->getDetails()}' added to collection.");
    }

    public function showItems() {
        foreach ($this->items as $item) {
            echo $item->getDetails() . "\n";
        }
    }
}

// Magic Method __toString() untuk output yang lebih baik
class Library {
    private $name;
    private $collections;

    public function __construct($name) {
        $this->name = $name;
        $this->collections = new Collection();
    }

    public function addCollectionItem(Item $item) {
        $this->collections->addItem($item);
    }

    public function displayCollections() {
        echo "Collections in {$this->name}:\n";
        $this->collections->showItems();
    }

    public function __toString() {
        return "Library: {$this->name}";
    }
}

// Penggunaan program
$library = new Library("City Library");
$book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
$magazine1 = new Magazine("National Geographic", "Various", 2023);

$library->addCollectionItem($book1);
$library->addCollectionItem($magazine1);
$library->displayCollections();

echo $library; // Output melalui Magic Method __toString()

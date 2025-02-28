import React, { useState } from 'react';
import { Button, Card, CardContent } from '@mui/material';
import { PlusCircle } from 'lucide-react';

const WishlistPage = () => {
  const [lists, setLists] = useState([]);
  const [showNewListForm, setShowNewListForm] = useState(false);
  const [newListName, setNewListName] = useState('');

  const handleCreateList = (e) => {
    e.preventDefault();
    if (newListName.trim()) {
      setLists([...lists, { name: newListName, items: [] }]);
      setNewListName('');
      setShowNewListForm(false);
    }
  };

  return (
    <div className="wishlist-container">
      <div className="wishlist-form">
        <h1 className="wishlist-header">My Wishlist</h1>
        <Button 
          onClick={() => setShowNewListForm(true)}
          className="wishlist-lis"
        >
          <PlusCircle className="wishlist-plus" />
          ADD A NEW LIST
        </Button>
      </div>

      {showNewListForm && (
        <Card className="wishlist-card">
          <CardContent className="wishlist-content">
            <form onSubmit={handleCreateList} className="wishlist-btn">
              <div>
                <label htmlFor="listName" className="wishlist-name">
                  List Name
                </label>
                <input
                  type="text"
                  id="listName"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  className="wishlist-input"
                  placeholder="Enter list name"
                />
              </div>
              <div className="wish-butn">
                <Button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white">
                  Create List
                </Button>
                <Button 
                  type="button" 
                  onClick={() => setShowNewListForm(false)}
                  className="wishlist-butt"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {lists.length === 0 && !showNewListForm && (
        <Card className="wish-len">
          <CardContent>
            <p className="wish-con">This list is empty</p>
          </CardContent>
        </Card>
      )}

      {lists.map((list, index) => (
        <Card key={index} className="wish-ind">
          <CardContent className="wishlist-conte">
            <h2 className="lis-name">{list.name}</h2>
            {list.items.length === 0 ? (
              <p className="emp">No items in this list</p>
            ) : (
              <div className="wishlist-mp">
                {list.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="wishlist-ite">
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WishlistPage;
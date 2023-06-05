# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index
    # ---2) This code will make a call to Active Record that will save the database contents as an instance variable
          # This will allow the program to easily access the database in order to perform whatever action is deemed necessary.
    @posts = BlogPost.all
  end

  # ---3) This method is used to display a specific instance within the model that we are querying.
        # To do this, we use params and reference a specific id. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This method is used to display HTML providing the user with the capability to input data that will be used to create an instance in the database
        # This is accomplished by creating a new object within the BlogPost class  
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This line is designed to retrieve the data from the 'new' method and saves it as a new instance in the database
          # Running .create() creates a new instance in the database and takes in the parameter of 'blog_post_params'
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This locates the desired post to edit by looking for the ID of the post provided in the parameter
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This line sends @post to the blog_post_params method. This will assign @post with a boolean value of true or false
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) If .destroy is successful, the user is redirected to the main posts page
      redirect_to blog_posts_path
    end
  end

  # ---9) private is used to restrict the scope of the arguments below it. The following method can only be accessed within this file and nowhere else. This ensures that the strong params are secure.
  private
  def blog_post_params
    # ---10) This line will check to see if blog_post is present through .require. If not, it will through an error
           # Then, .permit ensures that only the :title and :content parameters are accessed and therefore edited
    params.require(:blog_post).permit(:title, :content)
  end
end
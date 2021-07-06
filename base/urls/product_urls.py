from django.urls import path
from base.views import product_views as views
urlpatterns = [
     path('createproduct/',views.createProduct, name='create-product'),
     path('getproducts/', views.getProducts,
         name='get-products'),
     path('getproduct/<str:pk>/', views.getProduct,
         name='get-product'),
     path('updateproduct/<str:pk>/',views.updateProduct, name='update-product'),    
     path('deleteproduct/<str:pk>/',views.deleteProduct, name='delete-product'),        
]

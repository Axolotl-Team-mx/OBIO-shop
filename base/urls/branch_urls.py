from base.views import branch_views as views
from django.urls import path

urlpatterns = [
    path('createbranch/', views.createBranch, name='create-Branch'),
    path('getbranchs/', views.getBranchs, name='get-Branchs'),
    path('getbranch/<str:pk>/', views.getBranch, name='get-Branch'),
    path('updatebranch/<str:pk>/', views.updateBranch, name='update-Branch'),
    path('deletebranch/<str:pk>/', views.deleteBranch, name='delete-Branch'),   
]